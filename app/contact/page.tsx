
export const metadata = {
  title: 'Contact Us - Jersey World',
  description: 'Get in touch with Jersey World! We value your feedback and inquiries. Reach us through our contact form or find our contact information here.',
};

const Contact: React.FC = () => {
  return (
    <>
      <title>Contact Us - Jersey World</title>
      <meta name="description" content="Get in touch with Jersey World! We value your feedback and inquiries. Reach us through our contact form or find our contact information here." />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We would love to hear from you! Whether you have questions, feedback, or just want to chat, feel free to reach out to us using the form below or through our contact information.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
      <form className="mb-4" noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            id="message" 
            rows={4} 
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
          />
        </div>

        {/* <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Message</button> */}
      </form>

      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-2"><strong>Address:</strong> 123 Jersey St, Sport City, SC 45678</p>
      <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
      <p className="mb-4"><strong>Email:</strong> support@jerseyworld.com</p>

      <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
      <div className="flex gap-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Instagram</a>
      </div>
    </div>
    </>
  );
};

export default Contact;
