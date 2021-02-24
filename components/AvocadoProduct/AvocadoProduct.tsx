import Link from 'next/link';

const AvocadoProduct = (props: any) => {



    console.log('PROPS', props.product.name);
    return (
        <div className="border-t-2">
            <picture className="flex justify-center">
                {/* <source src={props.product.image} alt="avocadoImage" /> */}
                <img src={props.product.image} alt="avocadoImage" />
            </picture>
            <h3 className="text-center font-medium">
                <Link href={`/product/${props.product.id}`}>
                    <a >{props.product.name}</a>
                </Link>
            </h3>
            <p className="text-center font-bold">${props.product.price}</p>
        </div>
    )
}

export default AvocadoProduct
