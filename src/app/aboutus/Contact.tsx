import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#0095FF] text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-25">
        <div>
          <h2 className="text-4xl font-bold mb-2 mt-10">Our Contact Details</h2>
          <p className="text-2xl">Let's connect.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-40">
          <div>
            <h3 className="text-2xl font-semibold mb-1">Telephone</h3>
            <p className="text-xl">(702) 555-0122</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-1">Office</h3>
            <p className="text-xl">6391 Elgin St. Celina, Delaware 10299</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-1">WhatsApp</h3>
            <p className="text-xl">+971 555 0114 321</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-1">Email</h3>
            <p className="text-xl">mail@mail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
