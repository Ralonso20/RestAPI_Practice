export const queries = {
    getAllProducts: 'SELECT * FROM Products',
    addNewProduct : 'INSERT INTO Products SET ?',
    getProductById: 'SELECT * FROM Products WHERE id= '
};