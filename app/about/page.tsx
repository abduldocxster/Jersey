
export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and our values.',
};

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Our Jerseys</h1>
      <p className="mb-4">
        At Jersey World, we are passionate about creating high-quality jerseys for fans everywhere.
        Our mission is to provide apparel that not only represents your favorite teams but also
        meets the highest standards of comfort and durability.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Quality Materials</h2>
      <p className="mb-4">
        We source the finest fabrics to ensure that our jerseys are lightweight, breathable, 
        and built to last. Our materials are carefully selected to withstand the rigors of
        both play and casual wear, providing you with a product that feels as good as it looks.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Innovative Designs</h2>
      <p className="mb-4">
        Our design team is committed to blending traditional styles with modern aesthetics.
        Each jersey is crafted with attention to detail, featuring vibrant colors and team logos 
        that make you stand out in the crowd. Whether you’re at the game or out with friends, 
        our jerseys are designed to impress.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Our History</h2>
      <p className="mb-4">
        Founded in 2010, Jersey World started as a small local brand with a big dream: to 
        revolutionize sports apparel. Over the years, we have grown into a trusted name in 
        the industry, serving thousands of satisfied customers. Our dedication to quality and 
        service has earned us a loyal fan base.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Customer Testimonials</h2>
      <div className="mb-4">
        <blockquote className="border-l-4 border-blue-500 pl-4 italic">
          "The quality of these jerseys is unmatched! I wear mine to every game." 
          <cite className="block mt-2">— Alex T.</cite>
        </blockquote>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic">
          "I love the designs! They are stylish and comfortable." 
          <cite className="block mt-2">— Jamie R.</cite>
        </blockquote>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Join Our Community</h2>
      <p>
        We invite you to join our community of fans! Follow us on social media for the latest
        updates, promotions, and events. Share your jersey moments with us by tagging 
        @JerseyWorld!
      </p>
    </div>
  );
};

export default About;
