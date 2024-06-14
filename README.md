# Agilo Frontend Challenge

### Vercel deployment
https://storefront-cutup.vercel.app/

### Short description of the project
- **TASK**: Build a storefront cutup that displays products in a grid (landing page) and allows customers to visit a details page for each product.
- **TIME SPENT**: cca 6 hours
- **The implementation that was most challenging**: quantity selector button
- **The implementation I am most proud of**: filter functionality

### Project Structure and Considerations

#### Project Structure
The project is structured as follows:

1. **src/app/**: The main source directory for the application.
   
   - **components/**: Contains reusable components used throughout the application.
     
     - **grid/**: Contains components related to the product grid.
       - **grid.module.css**: CSS module for styling the Grid component.
       - **grid.tsx**: Component responsible for rendering the grid of products and implementing the filter functionality.
       - **products.tsx**: Defines the Product interface and the array of products.

     - **header/**: Contains components related to the header.
       - **header.module.css**: CSS module for styling the Header component.
       - **header.tsx**: Header component.

   - **details/**: Contains components and pages related to product details.
     - **[productId]/**: Dynamic route for displaying details of a selected product.
       - **details.module.css**: CSS module for styling the details page.
       - **page.tsx**: Details page component.
       - **QuantitySelector.js**: Component for selecting product quantity.

2. **public/**: Contains public assets such as images.
   - **images/**: Directory containing images used in the application.