import { useEffect } from "react";

const Button = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  hg,
  lowOp,
  submit,
  selectButton,
  name,
  handleChange,
  onClickFunction,
  checked,
}) => {
  // USARE lowOp PER I PULSANTI CHE FANNO CAMBIARE PAGINA
  // USARE selectButton PER I PULSANTI A SCELTA MULTIPLA (Da fixare)
  const handleButtonClick = (event) => {
    if (lowOp) {
      event.target.style.opacity = 0.5;
    } else if (selectButton) {
      event.target.style.backgroundColor = "yellow";
    }
  };

  function handleButtonClickReset(event) {
    event.target.style.opacity = 0.5;
    if (onClickFunction !== undefined) onClickFunction();
    setTimeout(() => {
      event.target.disabled = true;
      setTimeout(() => {
        event.target.style.opacity = 1;
        event.target.disabled = false;
      }, 1000);
    }, 100);
  }

  return (
    // LO STILE DEL COMPONENT BUTTON VIENE GESTITO CON bgColor - wd - textColor - wg - hg
    // <Button text={''} textColor={''} bgColor={''} wd={''} hg={''} wg={''}/>
    <div style={{ width: "100%" }}>
      {lowOp && (
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: bgColor,
            width: wd,
            color: textColor,
            fontWeight: wg,
            borderRadius: "6px",
            height: hg,
            border: "none",
            cursor: "pointer",
          }}
        >
          {text}
        </button>
      )}

      {/* Ogni selectButton dovrà avere un nome specifico !Importante!  */}
      {/* <Button selectButton
                            name={''}
                            bgColor={''}
                            wd={''}
                            hg={''}
                            text={''} /> */}
      {selectButton && (
        <label className="container-radio-button" style={{}}>
          <input type="radio" name={name} value={text} onClick={handleChange} checked={checked} />
          <span
            className="checkmark-radio-button"
            style={{
              width: `${wd}%`,
              borderRadius: "6px",
              height: hg,
              border: "none",
              cursor: "pointer",
            }}
          >
            {text}
          </span>
        </label>
      )}

      {submit && (
        <div className="text-login-registration">
          <button
            onClick={handleButtonClickReset}
            style={{
              backgroundColor: bgColor,
              width: wd,
              color: textColor,
              fontWeight: wg,
              borderRadius: "6px",
              height: hg,
              border: "none",
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        </div>
      )}
    </div>
  );
};

export default Button;
