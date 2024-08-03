import React, { FC, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import "./style.scss";
import Avatar from "@assets/avatars/avatar.png";
import coworkers from "@/components/namecross/workers.json";

type memberProps = {
  name: string;
  introduction?: string;
  avatarURL?: string;
};

const Member: FC<{ name: string; onClose: () => void }> = ({
  name,
  onClose,
}) => {
  const userDetails = useMemo(() => {
    return getUserDetails(name);
  }, [name]);

  function getUserDetails(name: string): memberProps | undefined {
    return coworkers.find(
      (user) => user.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  }

  // Check if it's mobile
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    if (isMobile && name) {
      const handleClickOutside = (event: MouseEvent) => {
        if ((event.target as HTMLElement).closest(".member") === null) {
          console.log("Click outside detected");
          onClose();
        }
      };

      // Delay adding event listeners to avoid click triggers when initializing rendering
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isMobile, name, onClose]);

  if (isMobile && !name) {
    return null;
  }

  // Keep only the first 70 characters of member introduction on mobile devices
  const memberIntro = userDetails?.introduction
    ? isMobile && userDetails.introduction.length > 70
      ? `${userDetails.introduction.slice(0, 70)}...`
      : userDetails.introduction
    : `Blabala  balabala  balabala  babababaaa lalallalala balabala balabala balabala balabala balabala`;

  return (
    <div className="member">
      <div className="meta">
        <img
          className="avatar"
          src={userDetails?.avatarURL || Avatar}
          alt={name}
        />
        <p className="name">{name}</p>
        <div className="intro">{memberIntro}</div>
      </div>
    </div>
  );
};

export default Member;
