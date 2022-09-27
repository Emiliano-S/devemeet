import { Link } from "react-router-dom";
import Button from "../components/Button";
import MakePhotoButton from "../components/MakePhotoButton";
import UploadButtonPhoto from "../components/UploadButtonPhoto";
import Logoholder from '../assets/svg/Logoholder.svg'
export function AddPhoto({ user, company }) {
    return (
        <div style={{ margin: "5%", display: "flex", flexDirection: "column", height: "100%", }} className="PhotoContainer">
            {user &&
                <div style={{
                    width: '100%',
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        display: "flex",
                        width: "100%",
                        justifycontent: "flex-start",
                        marginBottom: "50px"
                    }}>
                        <div>
                            <p style={{ color: "#364764", fontWeight: "bold" }}>Aggiungi foto</p>
                        </div>
                    </div>
                    <MakePhotoButton
                        bgColor={'#FCF347'}
                        text={'SCATTA UNA FOTO'}
                        textColor={'#364764'}
                        textClicked={'SCATTA UNA FOTO'}
                        registration user />
                    <UploadButtonPhoto registration user
                        bgColor={'#364764'}
                        textColor={'white'}
                        text={'CARICA UNA FOTO'}
                        textClicked={'CONTINUA'} />
                </div>}
                
            {company &&
                <div style={{
                    width: '100%',
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div style={{
                        display: "flex",
                        width: "100%",
                        justifycontent: "flex-start",
                        marginBottom: "50px"
                    }}>
                        <div>
                            <p style={{ color: "#364764", fontWeight: "bold" }}>Aggiungi logo aziendale</p>
                        </div>
                    </div>
                    <UploadButtonPhoto registration company
                        bgColor={'#FCF347'}
                        text={'CARICA UN LOGO'}
                        textColor={'#364764'}
                        textClicked={'CONTINUA'}
                    />
                </div>}
        </div>
    )
}