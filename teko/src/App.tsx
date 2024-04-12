import "./App.css";

const data = {
	id: 1,
	name: 'Laptop ASUS VivoBook 14 A412FA-EK734T (14" FHD/i5-10210U/8GB/512GB SSD/Intel UHD)',
	image:
		"https://lh3.googleusercontent.com/OPNIaDml5ZTh9653Gqtxc8BaWFqHZmSjaMs0ou321y3YWNR_68HybgMlVsflBN147gok7WxnsmrB7rKq9Z4a1mhnaS2lSYUPMA=rw-w300",
	price: 25800000,
	discountPercent: 10,
	seller: "Xiaomi",
	relatedProducts: [
		{
			id: 2,
			name: 'Laptop Lenovo (14" 4GB/128GB SSD/Intel UHD)',
			image:
				"https://lh3.googleusercontent.com/TvxcE7fes0NtPyjDUqmvVlbdgj63tujZtJCroBtrrMXu1j-MC1Rns56ia6z2USjinoa5gp_GfbthX5BRThBHEdBXFbWXBQ4K=rw-w300",
			availableQuantity: 3,
			price: 12000000,
			discountPercent: 5,
		},
		{
			id: 3,
			name: "Apple Macbook Pro 16 inch Retina display",
			image:
				"https://lh3.googleusercontent.com/TsvY9ecw4JYAwF0Ez-M5h_xc1qtX2bwLS21Zc_CbKy_qgIB0OEkbSnEREiXqxZEgnaPCyhLvSh04q7Z1GQlRFeyh5sprWto=rw-w300",
			discountPercent: 0,
			availableQuantity: 4,
			price: 15190000,
		},
		{
			id: 4,
			name: 'Laptop Dell (16" 8GB/256GB SSD/Intel UHD)',
			image:
				"https://lh3.googleusercontent.com/awNX33cUhBXFLT7Wv9aNBfKo9wiwiwLgPi2JfNgZKHGWTmYZ1N5AMQNE4HZT2AuZMZ1zX2Exk7UwQ0d-irm_sjcUwClzZTlW=rw-w300",
			discountPercent: 0,
			availableQuantity: 3,
			price: 19000000,
		},
	],
};

let VND = new Intl.NumberFormat("de-DE", {
	style: "currency",
	currency: "VND",
});

function App() {
	const calcDiscountPrice = data.price - data.price / data.discountPercent;

	return (
		<>
			<div className="h-screen w-screen flex flex-col items-center bg-white text-black">
				<p className="text-4xl font-bold pt-8 pb-3 ">TEKO</p>

				{/* MAIN PRODUCT HERE */}

				<img
					src={`${data.image}`}
					alt="Device Image"
					className="w-10/12 h-auto aspect-square m-0 p-0"
				/>
				<div className="w-full flex flex-col justify-start px-5 gap-1">
					<p className="text-red-500 text-3xl font-bold">
						{VND.format(data.price)}
					</p>
					<p className="text-sm flex gap-3">
						<span className="text-gray-400 line-through">
							{VND.format(calcDiscountPrice)}
						</span>
						<span className="text-red-500">{`-${data.discountPercent}%`}</span>
					</p>
					<p className="font-semibold">{data.name}</p>
					<p className="text-sm">
						<span>By</span>
						<span className="aria-hidden">&nbsp;</span>
						<span className="uppercase text-sky-500">xiaomi</span>
					</p>
				</div>

				{/* RELATED PRODUCTS */}

				<div className="w-full justify-start px-5 flex my-4">
					<p className=" font-bold text-md">Sản phẩm liên quan</p>
				</div>

				<div className="w-full overflow-hidden flex justify-center">
					{data.relatedProducts.map((product) => (
						<RelatedProducts {...product} key={product.id} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;

interface relatedProducts {
	id: number;
	name: string;
	image: string;
	discountPercent: number;
	availableQuantity: number;
	price: number;
}

const RelatedProducts = ({
	id,
	name,
	image,
	availableQuantity,
	price,
	discountPercent,
}: relatedProducts) => {
	let calcDiscountPrice = 0;

	if (discountPercent !== 0) {
		calcDiscountPrice = price - price / discountPercent;
	}

	return (
		<div className="w-[calc((100vw_-_2.5rem)/3)] border border-gray-300 rounded-lg ">
			{/* Nowrap and overflow hidden because the image required cutting */}
			<div
				className="flex flex-col justify-between items-between overflow-hidden text-nowrap p-2 gap-1 h-[15.938rem]"
				key={id}
			>
				<div>
					{/* Name group */}
					<img src={image} alt="related product" />
					<div>
						<p className="text-sm font-semibold">{name}</p>
						<p className="text-amber-500 text-sm">
							Còn {availableQuantity} sản phẩm
						</p>
					</div>
					{/* Price group */}
					<div>
						<p className="text-red-500 font-bold text-base">
							{VND.format(price)}
						</p>
						{discountPercent !== 0 && calcDiscountPrice !== 0 && (
							<p className="text-[0.75rem] flex">
								<span className="text-gray-400 line-through">
									{VND.format(calcDiscountPrice)}
								</span>
								<span className="aria-hidden">&nbsp;</span>
								<span className="text-red-500">{`-${discountPercent}%`}</span>
							</p>
						)}
					</div>
					{/* Button */}
				</div>
				<button className="border-2 border-red-500 text-sm text-red-500 rounded-lg flex justify-center items-center bg-white ">
					Thêm vào giỏ
				</button>
			</div>
		</div>
	);
};
