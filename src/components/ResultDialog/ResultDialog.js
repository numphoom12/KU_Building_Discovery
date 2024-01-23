// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

// import ResultCard from "../ResultCard/ResultCard";

// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// import ieImage from "../../assets/KUbuilding/IEBuilding.png";
// import civilImage from "../../assets/KUbuilding/civil.jpeg";
// import comofficeImage from "../../assets/KUbuilding/comoffice.jpeg";
// import mechanicImage from "../../assets/KUbuilding/mechanic.jpeg";

// const ResultDialog = ({ open, result, onClose }) => {
//   const [secondValue, setSecondValue] = useState();

//   useEffect(() => {
//     if (result && result.predictions) {
//       const probabilityArray = Object.entries(result.predictions);
//       probabilityArray.sort((a, b) => b[1] - a[1]);

//       console.log(probabilityArray);
//       const secondValue =
//         probabilityArray.length > 1 ? probabilityArray[1][0] : null;
//       console.log("second value is: ", secondValue);
//       setSecondValue(secondValue);
//     }
//   }, [result]);

//   const resultImage = {
//     "Civil building": {
//       image: civilImage,
//       // desc: result?.prediction?.civil,
//     },
//     "Com building": {
//       image: civilImage,
//       // desc: result?.prediction?.com,
//       desc: "ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน ถูกก่อตั้งอย่างเป็นทางการเมื่อวันที่ 3 กุมภาพันธ์ พ.ศ. 2532 โดยมีพันธกิจที่จะต้องดำเนินการสอน การวิจัย การสะสมองค์ความรู้ และการบริการวิชาการ ตามความชำนาญของภาควิชาฯ ผนวกกับการทำนุบำรุงศิลปวัฒนธรรมและรักษาเอกลักษณ์ของประเทศ ทั้งนี้ให้เป็นไปตามความต้องการของประเทศ ซึ่งภาควิชาฯ ได้ดำเนินการเพื่อสนองพันธกิจข้างต้น ด้วยการพัฒนาภาควิชาฯ ให้มีศักยภาพและความชำนาญในสาขาต่าง ๆ คือ สาขาวิศวกรรมคอมพิวเตอร์ สาขาเทคโนโลยีสารสนเทศ สาขาวิศวกรรมซอฟต์แวร์ และสาขาวิศวกรรมความรู้"
//     },
//     "OSC building": {
//       image: comofficeImage,
//       // desc: result?.prediction?.comoffice,
//     },
//     "IE building": {
//       image: ieImage,
//       // desc: result?.prediction?.ie,
//     },
//     "Mecha building": {
//       image: mechanicImage,
//       // desc: result?.prediction?.mechanic,
//     },
//   };

//   console.log(secondValue);
// ///////////////////////////////////////

//   return (
//     // <Dialog dividers
//     //   // open={true}
//     //   open={open}
//     //   keepMounted
//     //   onClose={handleClose}
//     //   aria-describedby="alert-dialog-slide-description"
//     //   maxWidth="xl"
//     //   // style={{ maxHeight: '50vh' }}
//     //   // fullWidth
//     // >
//     //   <DialogHeader className="m-5 mb-0">
//     //     {/* {result?.mostProbability || ""} */}
//     //   </DialogHeader>
//     //   <DialogBody className="h-[42rem] overflow-scroll flex items-center justify-center flex-col">
//     //   {/* <DialogBody className="flex items-center justify-center flex-col"> */}
//     //     <ResultCard
//     //       name={result?.mostProbability || ""}
//     //       // image={resultImage[result?.mostProbability]?.image}
//     //       image={resultImage[result?.mostProbability]?.image}
//     //       // desc={resultImage[result?.mostProbability]?.desc}
//     //     />
//     //     <p>{resultImage[result?.mostProbability]?.desc}</p>
//     //   <Button className="m-2"onClick={handleClose}>Close</Button>
//     //   </DialogBody>
//     //   <DialogFooter>
//     //   </DialogFooter>
//     // </Dialog>

//     // <ResultCard
//     //       name={result?.mostProbability || ""}
//     //       // image={resultImage[result?.mostProbability]?.image}
//     //       image={resultImage[result?.mostProbability]?.image}
//     //       // desc={resultImage[result?.mostProbability]?.desc}
//     //     />

//   )
// };

// export default ResultDialog;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

import ResultCard from "../ResultCard/ResultCard";

import ieImage from "../../assets/KUbuilding/IEBuilding.png";
import civilImage from "../../assets/KUbuilding/civil.jpeg";
import comofficeImage from "../../assets/KUbuilding/comoffice.jpeg";
import mechanicImage from "../../assets/KUbuilding/mechanic.jpeg";

export default function ResultDialog({ open, result, onClose }) {
  // const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const resultImage = {
    "Civil building": {
      image: civilImage,
      // desc: result?.prediction?.civil,
      moreInfo: ""
    },
    "Com building": {
      image: civilImage,
      // desc: result?.prediction?.com,
      desc: "ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน ถูกก่อตั้งอย่างเป็นทางการเมื่อวันที่ 3 กุมภาพันธ์ พ.ศ. 2532 โดยมีพันธกิจที่จะต้องดำเนินการสอน การวิจัย การสะสมองค์ความรู้ และการบริการวิชาการ ตามความชำนาญของภาควิชาฯ ผนวกกับการทำนุบำรุงศิลปวัฒนธรรมและรักษาเอกลักษณ์ของประเทศ ทั้งนี้ให้เป็นไปตามความต้องการของประเทศ ซึ่งภาควิชาฯ ได้ดำเนินการเพื่อสนองพันธกิจข้างต้น ด้วยการพัฒนาภาควิชาฯ ให้มีศักยภาพและความชำนาญในสาขาต่าง ๆ คือ สาขาวิศวกรรมคอมพิวเตอร์ สาขาเทคโนโลยีสารสนเทศ สาขาวิศวกรรมซอฟต์แวร์ และสาขาวิศวกรรมความรู้",
      moreInfo: ""
    },
    "OSC building": {
      image: comofficeImage,
      // desc: result?.prediction?.comoffice,
      moreInfo: ""
    },
    "IE building": {
      image: ieImage,
      // desc: result?.prediction?.ie,
      moreInfo: ""
    },
    "Mecha building": {
      image: mechanicImage,
      // desc: result?.prediction?.mechanic,
      moreInfo: ""
    },
  };

  const handleClose = () => {
    onClose && onClose();
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        // open={true}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title"></DialogTitle> */}
        <DialogContent  dividers={scroll === "paper"}>
          <Box mt={3} display={'flex'} justifyContent={'center'} alignContent={'center'}> 

          <ResultCard
            name={result?.mostProbability || ""}
            // image={resultImage[result?.mostProbability]?.image}
            image={resultImage[result?.mostProbability]?.image}
            // desc={resultImage[result?.mostProbability]?.desc}
            />
            </Box>

          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {resultImage[result?.mostProbability]?.desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{bgcolor: 'black'}} onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
