import { useState } from "react";
import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Copy, Check } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jaydeepsenwarkr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/Jaydeep.jpg"
          alt="Jaydeep"
          className="rounded-full w-20"
        />
        <h3>Let's Connect</h3>
        <p>
          Wanna play Games? Got a Ride plan? Or just build something cool
          together? I'm In{" "}
        </p>

        <p className="flex items-center gap-2">
          <a href="mailto:jaydeepsenwarkr@gmail.com">
            jaydeepsenwarkr@gmail.com
          </a>

          <button onClick={handleCopy} title={copied ? "Copied!" : "Copy email"}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;