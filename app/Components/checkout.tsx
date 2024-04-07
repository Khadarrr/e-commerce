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
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
      <p className="text-lg mb-4">Thank you for your order.</p>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            className={`form-input mt-1 block w-full ${errors.fullName ? 'border-red-500' : ''}`}
            {...register('fullName', { required: true, minLength: 3 })}
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">Minimum 3 characters required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            className={`form-input mt-1 block w-full ${errors.subject ? 'border-red-500' : ''}`}
            {...register('subject', { required: true, minLength: 3 })}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">Minimum 3 characters required</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className={`form-input mt-1 block w-full ${errors.email ? 'border-red-500' : ''}`}
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700">Message</label>
          <textarea
            id="body"
            className={`form-textarea mt-1 block w-full ${errors.body ? 'border-red-500' : ''}`}
            rows={4}
            {...register('body', { required: true, minLength: 3 })}
          />
          {errors.body && <p className="text-red-500 text-sm mt-1">Minimum 3 characters required</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {/* Use Link for client-side navigation */}
      <div className="mt-4">
        <Link href="/"
          className="text-blue-500 hover:underline">Return to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
