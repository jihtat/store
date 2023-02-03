type ProductType ={
    id:number;
    title:string;
    price:number;
    description:string;
    image:string;
    category:string;
    rating:RatingType
  
  }

  type RatingType={
    count:number;
    rate:number;
  }