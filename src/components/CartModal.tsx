'use client'
import Image from 'next/image'
const CartModal = () => {
	const cartItems = true

	return (
		<div className='w-max absolute p-4 rounded-md shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20'>
			{!cartItems ? (
				<div>Cart is empty</div>
			) : (
				/* LIST */
				<>
					<h2 className='text-xl font-bold'>Shopping Cart</h2>
					<div className='flex flex-col gap-8'>
						{/* ITEM */}
						<div className='flex gap-4 w-full'>
							<Image
								src='/podiums-surrounded-by-twigs-with-containers-filled-with-eucalyptus-essential-oil_1268-15476.jpg'
								alt=''
								width={72}
								height={96}
								className='object-cover rounded-md'
							/>
							<div className='w-full'>
								{/* TOP */}
								<div className='flex flex-col justify-between w-full'>
									<div className='flex items-center justify-between gap-8'>
										{/* TITLE */}
										<h3 className='font-semibold'>Product Name</h3>
										<div className='p-1 bg-gray-100 rounded-md'>$49</div>
									</div>
									{/* DESCRIPTION */}
									<div className='text-sm text-gray-500'>Available</div>
								</div>
								{/* BOTTOM */}
								<div className='flex justify-between text-sm'>
									<span className='text-gray-500'>Qty. 2</span>
									<span className='text-blue-500'>Remove</span>
								</div>
							</div>
						</div>
						<div className='flex gap-4'>
							<Image
								src='/podiums-surrounded-by-twigs-with-containers-filled-with-eucalyptus-essential-oil_1268-15476.jpg'
								alt=''
								width={72}
								height={96}
								className='object-cover rounded-md'
							/>
							<div className='w-full'>
								{/* TOP */}
								<div className='flex flex-col justify-between '>
									<div className='flex items-center justify-between gap-8'>
										{/* TITLE */}
										<h3 className='font-semibold'>Product Name</h3>
										<div className='p-1 bg-gray-100 rounded-md'>$49</div>
									</div>
									{/* DESCRIPTION */}
									<div className='text-sm text-gray-500'>Available</div>
								</div>
								{/* BOTTOM */}
								<div className='flex justify-between text-sm'>
									<span className='text-gray-500'>Qty. 2</span>
									<span className='text-blue-500'>Remove</span>
								</div>
							</div>
						</div>
					</div>
					<div className=''>
						<div className=' flex items-center justify-between font-semibold'>
							<span className=''>Subtotal</span>
							<span className=''>49$</span>
						</div>
						<p className='text-gray-500 text-sm mb-4'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
						<div className='flex justify-between text-sm'>
							<button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
								View Cart
							</button>
							<button className='rounded-md py-3 px-4 bg-black text-white'>
								Checkout
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default CartModal
