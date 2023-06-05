import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import HintButton from "./components/HintButton";
import Modal from "./components/Modal";

function HintComponent(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="hint-component">
      <HintButton clicked={ () => setShowModal(true) } title={ props.title } discription={ props.discription }/>
      <Modal show={ showModal } closed={ () => setShowModal(false) } title={ props.title }>
        <p className="text-zinc-300 p-2 text-xl">{ props.discriptionLong }</p>
        <CopyBlock text={ props.example } language="html" theme={dracula} codeBlock/>
        <p className="text-zinc-400 p-2 italic">{ props.attribute }</p>
      </Modal>
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <h1 className="text-white font-bold text-4xl p-4">Html 5 Cheat Sheet</h1>

      <div className="flex flex-wrap justify-center">

        <HintComponent
          title="<!-- -->"
          discription="comment"
          discriptionLong="HTML comments are a way to add notes, explanations, or reminders to your HTML 
          code that won't be visible to users who view your website."
          example='<!-- This is a comment -->'
          attribute="none"
        />

        <HintComponent
          title="<!DOCTYPE>"
          discription="document type"
          discriptionLong="The <!DOCTYPE> declaration is used at the beginning of an HTML document to indicate
          the version of HTML being used and ensure proper rendering by web browsers."
          example='<!DOCTYPE html>'
          attribute="none"
        />

        <HintComponent 
          title="<a>"
          discription="hyperlink"
          discriptionLong="The <a> tag is an HTML element used to create a hyperlink that 
          can be clicked on to navigate to another web page or resource."
          example='<a href="https://www.google.com">Google Homepage</a>'
          attribute="href, hrefang, media, ping, rel, target, type"
        />

        <HintComponent
          title="<abbr>"
          discription="abberviation"
          discriptionLong="The <abbr> tag is used to define abbreviations or acronyms in an HTML 
          document and display a tooltip with their full text when hovered over."
          example='<p>My favorite TV show is <abbr title="The Office">TO</abbr>.</p>'
          attribute="class, contenteditable, contextmenu, dir, draggable, id, irrelevant, lang, ref, registrationmark, tabindex, template, title"
        />

        <HintComponent
          title="<adddress>"
          discription="address element"
          discriptionLong="The <address> tag is used to provide contact information or location 
          details for its parent element in an HTML document."
          example={`<address>\n\tWritten by John Doe<br>\n\tEmail: john@example.com<br>\n\tWebsite: www.johndoe.com\n</address>`}
          attribute="class, contenteditable, contextmenu, dir, draggable, id, irrelevant, lang, ref, registrationmark, tabindex, template, title"
        />

        <HintComponent
          title="<area>"
          discription="image map area"
          discriptionLong="The <area> tag is a clickable region within an image map, allowing for interactive 
          and responsive web design."
          example={`<img src="example_image.jpg" usemap="#examplemap">\n\n<map name="examplemap">\n\t<area shape="rect" coords="0,0,50,50"href="https://www.example.com/" alt="Example Link">\n</map>`}
          attribute="alt, coords, href, hreflang, media, ping, rel, shape, target, type"
        />

      </div>
    </div>
  );
}

export default App;
