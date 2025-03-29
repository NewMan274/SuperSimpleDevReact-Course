function ProductDetails({name, price, discountPrice, imageSrc}) {
  return(
    <>
      <img src={imageSrc} width="50" /><br />
      {name}
      {!discountPrice === true ? 
        <p>Price: ${price.toFixed(2)}</p> : 
        (
          <>
            <p><del>Price: ${price.toFixed(2)}</del></p>
            <p>Discount Price: ${discountPrice.toFixed(2)}</p>
          </>
        ) 
      }
      <button>Add to Cart</button>
      <hr />
    </>
  );
}

function Time () {
  const time = dayjs().format("HH:mm:ss");
  const [theTime, setTheTime] = React.useState(time)

  React.useEffect(() => {
    setInterval(() => {
      setTheTime(dayjs().format("HH:mm:ss"))
    })
  }, [1000])

  return (
    <>
      <p>Current time: {theTime}</p>
    </>
  )
}

function LoginForm(){
  const [showPassword, setShowPassword] = React.useState(true)

  function hideAndSeek() {
    showPassword === true ? setShowPassword(false) : setShowPassword(true)
  }

  return(
    <>
      <div>
        <input className="email-input" placeholder="Email" /><br />
        <input className="password-input" placeholder="Password" type={showPassword ? "password" : "text"} />
        <button onClick={hideAndSeek} className="hideAndSeek">{showPassword ? "Show" : "Hide"}</button>
      </div>
      <button className="login-button">Login</button>
      <button className="signUp-button">Sign Up</button>
    </>
  );
};

function Assignment2() {
  return (
    <>
      <h3>Hello, welcome to my website</h3>
      <LoginForm />
    </>
  );
};

function Counter() {
  const [count, setCount] = React.useState(0);
  const counterRef = React.useRef();

  function clicking() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  function autoClick() {
    const counterElem = counterRef.current;
    setInterval(() => {
      if (counterElem) {
        counterElem.click();
      }
    }, 1000)
  }


  return (
    <div className="counter-container">
      <button onClick={clicking} ref={counterRef} className="clicked-counter">Clicked {count} times</button>
      <button onClick={reset} className="reset-button">Reset</button>
      <button onClick={autoClick} className="auto-click">Auto Click</button>
    </div>
  );
};

function Display() {
  const [inputText, setInputText] = React.useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function reset() {
    setInputText("");
  }

  function example() {
    setInputText("Uthman")
  }

  return (
    <>
      <input
        placeholder="Type a name here"
        value={inputText}
        onChange={saveInputText}
      ></input>
      <button
        onClick={reset}
      >Reset</button>
      <button
        onClick={example}
      >Example</button>
      <p>Hello {inputText}</p>
    </>
  );
};

function Button() {
  const [isButtonOn, setIsButtonOn] = React.useState(true)
  function handleClicking() {
    isButtonOn === true ? setIsButtonOn(false): setIsButtonOn(true)
  }

  return (
    <>
      <button className={isButtonOn ? "button-on" : "button-off"} onClick={handleClicking}>{isButtonOn ? "ON" : "OFF"}</button>
    </>
  );
}

function App() {
  return (
    <>
    <Time />
    <hr />
    <Button />
    <hr />
    <Display />
    <hr />
    <Counter />
    <Assignment2 />
    <hr />
    <ProductDetails 
      imageSrc={"images/cotton-socks.png"}
      name="Cotton Socks" 
      price={10.99}
      discountPrice={5.45}  
    />
    <ProductDetails
      imageSrc={"images/tennis-balls.png"} 
      name="Tennis Balls" 
      price={6}
    />
    <ProductDetails
      imageSrc={"images/plain-t-shirt.png"} 
      name="Plain T Shirt" 
      price={7.99}
    />
  </>
  );
}

const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);