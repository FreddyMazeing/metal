import React from "react";

const ContactForm = () => {
  return (
    <div
      name="contact"
      id="contact"
      className="max-w-[7xl] m-auto md:pl-20 py-16 px-10"
    >
      <h1 className="py-4 font-semibold text-3xl  text-center ">Contact</h1>
      <form
        action="https://getform.io/f/pboxvjna"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className=" rounded-lg p-3 flex bg-gray-900"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone </label>
            <input
              className="rounded-lg p-3 flex bg-gray-900"
              type="text"
              name="phone"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="rounded-lg p-3 flex bg-gray-900"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="rounded-lg p-3 flex bg-gray-900"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="rounded-lg p-3 bg-gray-900"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button className="bg-blue-950 hover:to-blue-500 mt-4 w-full rounded-lg p-4 ">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
