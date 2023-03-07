export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
