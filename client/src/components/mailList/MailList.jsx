import "./mailList.css";

const MailList = () => {
  return (
    <div className="mailList">
      <h2 className="mailTitle">Save time, Save Money!</h2>
      <span className="mailDescription">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
      <label>
        <input type="checkbox" />
        Send me a link to download the free app!
      </label>
    </div>
  );
};

export default MailList;
