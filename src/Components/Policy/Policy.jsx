import "./Policy.scss";

function Policy() {
  return (
    <section className="policy">
      <article className="policy__container">
        <h1 className="policy__title">Privacy Policy</h1>
        <h2 className="policy__subtitle">An overview of data protection</h2>
        <div className="policy__section">
          <h3 className="policy__heading">General</h3>
          <p className="policy__text">
            The following gives a simple overview of what kind of personal
            information we collect, why we collect them and how we handle your
            data when you are visiting or using our website. Personal
            information is any data with which you could be personally
            identified. Detailed information on the subject of data protection
            can be found in our privacy policy found below.
          </p>
        </div>
        <div className="policy__section">
          <h3 className="policy__heading">Data collection on our website</h3>
          <p className="policy__text">Who is responsible for the data collection on this website?</p>
          <p className="policy__text">
            The data collected on this website are processed by the website
            operator. The operator's contact details can be found in the
            website's required legal notice.
          </p>
          <p className="policy__text">How do we collect your data?</p>
          <p className="policy__text">
            Some data are collected when you provide them to us. This could, for
            example, be data you enter in a contact form.
          </p>
          <p className="policy__text">
            Other data are collected automatically by our IT systems when you
            visit and use our website. These data are primarily technical data
            such as the browser and operating system you are using or when you
            accessed the website. These data are collected automatically as soon
            as you enter our website.
          </p>
          <p className="policy__text">What do we use your data for?</p>
          <p className="policy__text">
            Part of the data is collected to ensure the proper functioning of
            the website. Other data can be used to analyze how visitors use the
            site.
          </p>
          <p className="policy__text">What rights do you have regarding your data?</p>
          <p className="policy__text">
            You always have the right to request information about your stored
            data, its origin, its recipients, and the purpose of its collection
            at no charge. You also have the right to request that your data be
            corrected, blocked, or deleted. You can contact us at any time using
            the address given in the legal notice if you have further questions
            about the issue of privacy and data protection. You may also, of
            course, file a complaint with the competent regulatory authorities.
          </p>
        </div>
        <div className="policy__section">
          <h3 className="policy__heading">Analytics and third-party tools</h3>
          <p className="policy__text">
            When visiting our website, statistical analyses may be made of your
            surfing behavior. This happens primarily using cookies and
            analytics. The analysis of your surfing behavior is usually
            anonymous, encrypted, and pseudonimized, meaning that we will not be
            able to identify you through this data. You can object to this
            analysis or prevent it by not using certain tools. Detailed
            information can be found in the following privacy policy.
          </p>
        </div>
        <label className="policy__opt-in">
          <input type="checkbox" id="optInCheckbox" className="policy__checkbox" />
          <strong className="policy__opt-text">
            You are currently opted out. Check this box to opt-in.
          </strong>
        </label>
      </article>
    </section>
  );
}

export default Policy;
