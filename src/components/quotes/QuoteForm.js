import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  // save the form data to the state if user navigate away from the page
  const [isUserLeaving, setIsUserLeaving] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  // FUNCTIONS
  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  // check if user navigate away from the form and want
  // to save the unsubmmitted form input
  const formFocusedHandler = () => {
    setIsUserLeaving(true);
  };

  // to turn off the Promp component once user submit the form
  const finishFormHandler = () => {
    setIsUserLeaving(false);
  };
  return (
    <>
      {/* Prompt component to ask if user want to save form data when they navigate away 
      when props take a true or false whether this component show be shown if user changes the URL
      message props show the text to the user and gives a location object of where the user want to go to
      */}
      <Prompt
        when={isUserLeaving}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef} required></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishFormHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
