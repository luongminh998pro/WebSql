const mysql = require('mysql2/promise');

export default async function handler(req, res) {
    const db = await mysql.createConnection({
        host: process.env.DB_HOST,     // Host của cơ sở dữ liệu từ xa
        user: process.env.DB_USER,     // Tên người dùng
        password: process.env.DB_PASSWORD, // Mật khẩu
        database: process.env.DB_NAME  // Tên cơ sở dữ liệu
    });

    try {
        const [rows] = await db.execute('SELECT * FROM products');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching products' });
    } finally {
        await db.end();
    }
}
