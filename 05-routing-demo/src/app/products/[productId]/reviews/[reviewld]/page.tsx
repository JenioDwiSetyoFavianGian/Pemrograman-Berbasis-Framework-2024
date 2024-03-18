type Props = {
    params: {
        productId: String,
        reviewId: String
    }
  }
  
  export default function ReviewDetails({ params }: Props) {
    return (
          <h1>Details About Product {params.productId} and Review {params.reviewId}</h1>
    )
  }
  