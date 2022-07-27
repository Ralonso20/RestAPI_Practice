export const queries = {
    getAllProducts: 'SELECT * FROM Products',
    addNewProduct : 'INSERT INTO Products SET ?',
    getProductById: 'SELECT * FROM Products WHERE id= ?',
    deleteProduct: 'DELETE FROM webstore.Products WHERE id= ?', 
    updateProduct: 'UPDATE Products SET name = ?, Description = ?, Quantity = ? WHERE id = ?'
}; 