import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import useCartStore from "../Store/cart"; // Import the cart store

interface ContactFormInputs {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

const CheckoutSuccessPage: React.FC = () => {
  const emptyCart = useCartStore(state => state.emptyCart);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data: ContactFormInputs) => {
    setSubmitting(true);
    // Send form data to server or perform any desired action
    setTimeout(() => {
      setSubmitting(false);
      console.log(data);
      // Clear the cart after submitting the form
      emptyCart();
    }, 1000);
  };

  return (
    <div className="container mx-auto  flex flex-col items-center">
    <h1 className="text-3xl font-bold text-center mb-8">Order Successful!</h1>
    <p className="text-lg text-center mb-12">Thank you for your order. We'll get it processed right away!</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="shadow-sm rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register('fullName', { required: true, minLength: 3 })}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">Minimum 3 characters required</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-sm font-medium mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            className="shadow-sm rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register('subject', { required: true, minLength: 3 })}
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1">Minimum 3 characters required</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            className="shadow-sm rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="body" className="text-sm font-medium mb-1">Message</label>
          <textarea
            id="body"
            className="shadow-sm rounded-md border border-gray-300 px-3 py-2 h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            rows={4}
            {...register('body', { required: true, minLength: 3 })}
          />
          {errors.body && <p className="text-red-500 text-xs mt-1">Minimum 3 characters required</p>}
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 disabled:opacity-50"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
    <div className="mt-8 text-center">
      <Link href="/" className="text-blue-500 hover:underline">Return to Home</Link>
    </div>
  </div>
  
  );
};

export default CheckoutSuccessPage;
