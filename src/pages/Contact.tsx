export default function Contact() {
  return (
    <footer className="bg-white text-center text-black lg:text-left">
      {/* Main container div: holds the entire content of the footer, including form, address, and map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 py-10">
        {/* Form section */}
        <div className="p-4">
          <h6 className="mb-4 font-semibold">Contact Us</h6>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full mb-2 p-2 border border-gray-300 rounded"
              rows={4}
              required
            />
            <button
              type="submit"
              className="btn-blue w-full font-semibold py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Address section */}
        <div className="p-4">
          <h6 className="mb-4 font-semibold">Our Address</h6>
          <p>
            107 Bedford Street Cannons Creek, Porirua, Wellington | New Zealand
          </p>
          <p className="mt-2">Phone: +64 28 85 144 208</p>
          <p className="mt-2">Email: mokumaeric@gmail.com</p>
        </div>

        {/* Map section */}
        <div className="p-4">
          <h6 className="mb-4 font-semibold">Find Us Here</h6>
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed30!2sYour%20Location!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}
