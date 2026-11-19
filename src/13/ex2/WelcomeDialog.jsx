import React from "react";
import Dialog from "./Dialog";
import "./WelcomeDialog.css";

function WelcomeDialog(props) {
    return (
        <Dialog
            title="어서오세요"
            message="우리 사이트에 오신걸 환영합니다"
        />
    );
}

export default WelcomeDialog;