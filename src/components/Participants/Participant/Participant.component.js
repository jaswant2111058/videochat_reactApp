import React from "react";
import Card from "../../Shared/Card/Card.component";
import CardListener from "../../Shared/Card/CardListener";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Participant.css";

export const Participant = (props) => {
  const {
    curentIndex,
    currentParticipant,
    hideVideo,
    videoRef,
    showAvatar,
    currentUser,
    NotInstructer,
  } = props;
  const userName = currentParticipant?currentParticipant.name.slice(0,currentParticipant.name.length-1):"refresh again"
  if (!currentParticipant) return <></>;
  if(currentParticipant.name[currentParticipant.name.length-1]==='$')
  {
  return (
    <>
    <div className="wrap">
    <div className={`participant ${hideVideo ? "hide" : ""}`}>
      <Card>
        <video
          ref={videoRef}
          className="video"
          id={`participantVideo${curentIndex}`}
          autoPlay
          playsInline
        >
          
        </video>
        {!currentParticipant.audio && (
          <FontAwesomeIcon
            className="muted"
            icon={faMicrophoneSlash}
            title="Muted"
          />
        )}
        {showAvatar && (
          <div
            style={{ background: currentParticipant.avatarColor }}
            className="avatar"
          >
            {currentParticipant.name[0]}
          </div>
        )}
       
      </Card>
      <div className="nameWrap">
      <div className="name">
          {userName}
          {currentUser ? "(You)" : ""}
        </div>
        </div>
    </div>
    </div>
    </>
  )
        }
        else{
          return (
            <>
            <div className="listenerwraper">
            <div className="listener">
              <CardListener>
                <video
                  ref={videoRef}
                  className="videoListener"
                  id={`participantVideo${curentIndex}`}
                  autoPlay
                  playsInline
                ></video>
                {!currentParticipant.audio && (
                  <FontAwesomeIcon
                    className="muted"
                    icon={faMicrophoneSlash}
                    title="Muted"
                  />
                )}
                {showAvatar && (
                  <div
                    style={{ background: currentParticipant.avatarColor }}
                    className="avatarListener"
                  >
                    {currentParticipant.name[0]}
                    
                  </div>
                  
                )}
              </CardListener>
              <div className="nameListener">
                  {userName}
                </div>
            </div>
            </div>
            </>
          )
        }
    
};
