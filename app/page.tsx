const Arrow = () => <span aria-hidden="true">→</span>;

const credentials = [
  'Certified Personal Trainer',
  'Group Fitness Instructor',
  "Women's Fitness Specialist",
  'Balance Training',
  'Adaptive Fitness',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Everyday Strong with Robin home">
          <span className="brand-mark">R</span>
          <span>Everyday Strong <span className="brand-light">with Robin</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#coaching">Coaching</a>
          <a href="#included">What&apos;s included</a>
          <a href="#about">Meet Robin</a>
          <a className="nav-cta" href="#contact">Let&apos;s talk</a>
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <div><a href="#coaching">Coaching</a><a href="#included">What&apos;s included</a><a href="#about">Meet Robin</a><a href="#faq">Questions</a><a href="#contact">Let&apos;s talk</a></div>
        </details>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Private personal training for older adults and women</p>
          <h1>Strength for the life you want to <em>keep living.</em></h1>
          <p className="hero-intro">Personal coaching at home across Northern Virginia, in senior living communities, or online—built around your abilities, priorities, and everyday life.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Book a free conversation <Arrow /></a>
            <a className="text-link" href="#coaching">Explore coaching <Arrow /></a>
          </div>
          <div className="proof-grid" aria-label="Robin's experience">
            <div><b>10+ years</b><span>in healthcare</span></div>
            <div><b>Adaptive + balance</b><span>training expertise</span></div>
            <div><b>Northern Virginia</b><span>in-home service area</span></div>
          </div>
        </div>
        <div className="hero-visual"><div className="sun" /><div className="arch"><img className="hero-photo" src="./robin-trainer-home.png" alt="Robin Fetter, personal trainer" /></div></div>
      </section>

      <section className="coaching section-pad" id="coaching">
        <div className="section-heading"><p className="eyebrow"><span /> Two ways Robin can help</p><h2>Personal coaching, shaped around the person.</h2><p>Robin works one-to-one, adjusting each session to your experience, environment, and goals.</p></div>
        <div className="offer-grid">
          <article className="offer-card dark">
            <p className="card-label">Older adults</p><h3>Strength for everyday independence</h3>
            <p>For older adults who want to move more confidently, maintain practical strength, and continue doing more of what matters.</p>
            <ul><li>Private homes and senior living communities</li><li>Balance, mobility, and adaptive exercise experience</li><li>Coordination around medical or therapy guidance when appropriate</li></ul>
            <a href="#contact">Talk about your needs <Arrow /></a>
          </article>
          <article className="offer-card light">
            <p className="card-label">Women&apos;s fitness</p><h3>A private, non-intimidating path to strength</h3>
            <p>For women who want individualized strength coaching without having to fit themselves into a generic gym program.</p>
            <ul><li>At home, virtually, or at your gym when permitted</li><li>Training adapted to your experience and current abilities</li><li>A sustainable approach built around real schedules</li></ul>
            <a href="#contact">See if we&apos;re a fit <Arrow /></a>
          </article>
        </div>
      </section>

      <section className="story-slot section-pad" id="story">
        <div><p className="eyebrow"><span /> Client story reserved</p><h2>A real client experience will live here.</h2><p>Once permission is secured, this section will briefly share the client&apos;s starting point, Robin&apos;s approach, a meaningful everyday outcome, and an approved quote.</p></div>
      </section>

      <section className="included section-pad" id="included">
        <div className="section-heading left"><p className="eyebrow"><span /> What private coaching includes</p><h2>More than a workout to follow.</h2></div>
        <div className="included-grid">
          <article><b>01</b><h3>A goals conversation</h3><p>Robin learns what you want to make easier, what concerns you, and what guidance may already be in place.</p></article>
          <article><b>02</b><h3>Live private sessions</h3><p>Meet in an approved in-person setting or virtually for instruction shaped around you and the equipment available.</p></article>
          <article><b>03</b><h3>An evolving approach</h3><p>Robin adjusts the work as your strength, confidence, circumstances, and goals change.</p></article>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-portrait"><img src="./robin-about.jpg" alt="Robin Fetter smiling" /></div>
        <div className="about-copy"><p className="eyebrow"><span /> Meet your coach</p><h2>Experienced, energetic, and genuinely personal.</h2>
          <p className="lead">Robin is a Certified Personal Trainer with more than a decade of healthcare experience and specialized training in women&apos;s, balance, and adaptive fitness.</p>
          <p>Her experience includes older adults in private homes and assisted living, plus clients navigating disabilities, injuries, surgeries, and mobility challenges. Her style is attentive, energetic, and grounded in a strong trainer-client relationship.</p>
          <div className="credentials">{credentials.map((item) => <span key={item}>{item}</span>)}</div>
          <p className="scope-note">Robin provides fitness coaching, not medical treatment or physical therapy. Medical clearance or coordination with a healthcare professional may be appropriate for some clients.</p>
        </div>
      </section>

      <section className="workshop section-pad" id="workshops">
        <div><p className="eyebrow"><span /> For local communities</p><h2>Looking for a practical wellness workshop?</h2><p>Robin offers friendly introductory sessions for senior communities, neighborhood groups, churches, and community organizations.</p></div>
        <a className="button light" href="#contact">Ask about a workshop <Arrow /></a>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="section-heading left"><p className="eyebrow"><span /> Common questions</p><h2>Good things to know before starting.</h2></div>
        <div className="faq-list">
          <details><summary>Do I need to already be active or fit?</summary><p>No. Robin starts with your current abilities and builds from there. The first conversation is a chance to discuss concerns before scheduling a session.</p></details>
          <details><summary>Can Robin work with someone leaving physical therapy?</summary><p>Potentially, with appropriate clearance and guidance. Robin provides fitness coaching rather than rehabilitation and can work within recommendations supplied by a qualified healthcare professional.</p></details>
          <details><summary>Does Robin bring equipment?</summary><p>Robin will discuss the training environment and equipment needs before the first session. Many sessions can begin with simple, portable equipment and the space already available.</p></details>
          <details><summary>How does virtual coaching work?</summary><p>Virtual sessions provide live one-to-one instruction and adaptations over video. Robin will first determine whether virtual coaching is appropriate for your needs and space.</p></details>
          <details><summary>Where can in-person sessions take place?</summary><p>Robin&apos;s core service is in-home coaching throughout Northern Virginia. Assisted-living, residential, and client gym spaces may also work when outside trainers are permitted. Access requirements are confirmed before scheduling; other nearby locations may carry a travel charge.</p></details>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-copy"><p className="eyebrow"><span /> Start with a conversation</p><h2>Tell Robin what you&apos;d like to make easier.</h2><p>The introductory conversation is free. Share a little about what you need, and Robin will personally follow up.</p></div>
        <form className="contact-form">
          <label>Your name<input type="text" name="name" autoComplete="name" placeholder="Name" /></label>
          <label>Email or phone<input type="text" name="contact" autoComplete="email" placeholder="How should Robin reach you?" /></label>
          <label>I&apos;m looking for<select name="interest" defaultValue=""><option value="" disabled>Select one</option><option>Coaching for myself</option><option>Coaching for a family member</option><option>A community workshop</option><option>I&apos;m not sure yet</option></select></label>
          <label>Location or community<input type="text" name="location" placeholder="City, neighborhood, or senior community" /></label>
          <label>What would you like help with?<textarea name="message" rows={4} placeholder="A few words is plenty." /></label>
          <button className="button primary" type="button">Request a conversation <Arrow /></button>
          <small>Mock-up form—sending will be connected before launch. Please don&apos;t include sensitive medical information here.</small>
        </form>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">R</span><span>Everyday Strong with Robin</span></a><p>Private in-home & virtual fitness coaching.</p><nav aria-label="Footer navigation"><a href="#coaching">Coaching</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></nav></footer>
    </main>
  );
}
