import "./Map.scss";

function Map() {
  return (
    <section className="map">
      <div className="map__container">
        <iframe
          className="map__iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.0123872320074!2d-98.48700418488537!3d29.425190182114474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf48bdf3db6cf%3A0x6e0d87ef3729b197!2s300%20Alamo%20Plaza%2C%20San%20Antonio%2C%20TX%2078205%2C%20USA!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;

