const Newsletter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-detail">
          <div className="newsletter-input">
            <h1>Join Our Newsletter</h1>
            <p>
              Don&apos;t miss the fun. Get the buzz on products deals and more
            </p>
            <input
              type="email"
              aria-label="email for newsletter"
              placeholder="Email address"
            />
          </div>
          <img src="src\assets\newsletter-lady.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Newsletter;
