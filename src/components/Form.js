import React from "react";
import Button from "./Button";
import { useState } from 'react'

//installata npm install react-phone-input-2 --save
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Form() {
    const [value, setValue] = useState()
    return (
        <>
            <div className="form-container">
                <form>
                    <div className='form-title-style'>Nome e Cognome</div>
                    <input className='input-form-style' type={'text'}
                        pattern="[a-z]" required></input>

                    <div className='form-title-style'>Data di nascita</div>
                    <input className="input-form-style" type="date" style={{ height: '3.5em', width: '100%' }}
                        min="1932-01-01" max="2022-12-31" required></input>

                    <div className='form-title-style'>Sesso</div>
                    <div className="option-container">

                        <Button selectButton name={'gender'} bgColor={'white'} wd={100} hg={'3em'} text={'Uomo'} />
                        <Button selectButton name={'gender'} bgColor={'white'} wd={100} hg={'3em'} text={'Donna'} />
                        <Button selectButton name={'gender'} bgColor={'white'} wd={100} hg={'3em'} text={'Altro'} />

                    </div>

                    <div className='form-title-style'>Recapito telefonico</div>
                    <PhoneInput
                        placeholder=''
                        value={value}
                        onChange={setValue}
                    />


                    <div className='form-title-style'>Stato, Città</div>
                    <input type={'text'} className='input-form-style' required></input>

                    <div className='form-title-style'>Sono in cerca di lavoro</div>
                    <div className="option-container">
                        <Button selectButton
                            name={'work'}
                            bgColor={'white'}
                            wd={100}
                            hg={'3em'}
                            text={'Remoto'} />
                        <Button selectButton
                            name={'work'}
                            bgColor={'white'}
                            wd={100}
                            hg={'3em'}
                            text={'In sede'} />
                        <Button selectButton
                            name={'work'}
                            bgColor={'white'}
                            wd={100}
                            hg={'3em'}
                            text={'Remoto + in sede'} />
                    </div>
                    <input type={'submit'} value={'CONTINUA'}
                        style={{
                            backgroundColor: 'yellow',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '15%',
                            padding: '1em',
                            border: 'transparent',
                            width: '50%',
                            height: '3em',
                            borderRadius: '0.5em',
                            color: 'rgb(54,71,100)'
                        }} />
                </form>
            </div>
        </>
    )
}