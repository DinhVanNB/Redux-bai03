const Product = ({ price, quantity, title }) => (
    <div>
      {title} - ${price}{quantity ? ` x ${quantity}` : null}
    </div>
  )
  
  export default Product