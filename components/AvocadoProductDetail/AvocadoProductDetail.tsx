const AvocadoProductDetail = (props: any) => {
    return (
        <div className="grid sm:grid-cols-2 items-center justify-items-center bg-black bg-opacity-400 min-h-screen">
            <img className="w-2/4 rounded-full mt-12" src={props.product.image} alt="avocadoImage"/>
            <h2 className="text-white text-4xl font-medium text-center pt-12">{props.product.name}</h2>
            <p className="col-span-full p-8 text-white text-center mt-6 pb-6">{props.product.attributes.description}</p>
        </div>
    )
}

export default AvocadoProductDetail
