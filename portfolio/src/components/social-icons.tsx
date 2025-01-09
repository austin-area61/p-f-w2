import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function SocialIcons() {
  return (
    <div className="flex space-x-6 text-gray-400">
      <a
        href="https://github.com/austin-area61"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-300 transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={24} />
      </a>
      <a
        href="https://linkedin.com/in/austin-onyango-area61/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-300 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://x.com/axwellaustin"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-300 transition-colors"
        aria-label="X Profile"
      >
        <Twitter size={24} />
      </a>
      <a
        href="mailto:austinonyango.area61@gmail.com"
        className="hover:text-teal-300 transition-colors"
        aria-label="Email Me"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}
