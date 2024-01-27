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
// import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";


import ResultCard from "../ResultCard/ResultCard";

import comImage from "../../assets/KUbuilding/com.jpg";
import ieImage from "../../assets/KUbuilding/IEBuilding.png";
import civilImage from "../../assets/KUbuilding/civil.jpeg";
import comofficeImage from "../../assets/KUbuilding/comoffice.jpeg";
import mechanicImage from "../../assets/KUbuilding/mechanic.jpeg";
import {
  Typography,
} from "@material-tailwind/react";

export default function ResultDialog({ open, result, onClose }) {
  // const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const resultImage = {
    "Civil building": {
      name: "ตึกวิศวกรรมโยธา",
      image: civilImage,
      desc: "เมื่อคณะวิศวกรรมศาสตร์ ย้ายที่ตั้งจากปากเกร็ดมายังบางเขน ได้มีการก่อสร้างอาคารปฏิบัติการวิศวกรรมโยธา (Shop 1) ขึ้นในปี พ.ศ. 2511 เป็นอาคารคอนกรีตเสริมเหล็ก 2 ชั้น กึ่งถาวร และต่อมาได้มีการขยายพื้นที่ส่วนปฏิบัติการแล้วเสร็จในปี พ.ศ. 2518 ซึ่งภาควิชาวิศวกรรมโยธาได้ใช้อาคารหลังนี้มาโดยตลอด เป็นเวลากว่า 40 ปี จนกระทั่งในปี พ.ศ. 2552 ภาควิชาฯ ได้ดำเนินการก่อสร้างอาคารเรียนและปฏิบัติการหลังใหม่ทดแทนหลังเดิมที่ใช้งานมาเป็นระยะเวลานานและไม่สามารถรองรับจำนวนนิสิตที่เพิ่มขึ้นอย่างต่อเนื่องได้ โดยดำเนินการสร้างแล้วเสร็จในปี พ.ศ. 2553 โดยใช้ชื่อ “อาคารบุญสม สุวชิรัตน์” ซึ่งเป็นอาคารคอนกรีตเสริมเหล็ก สูง 9 ชั้น พร้อมชั้นลอยและชั้นดาดฟ้า สร้างขึ้นทดแทนในบริเวณพื้นที่อาคาร 9 และอาคาร 10 เดิมของภาควิชาวิศวกรรมโยธา นอกจากนี้ยังมีอาคารปฏิบัติการวัสดุธรณี เดิมเป็นอาคารชั้นเดียวทรงจั่ว ใช้เป็นพื้นที่กิจกรรมนิสิต ต่อมาได้ใช้เป็นห้องปฏิบัติการวิศวกรรมปฐพีและขนส่ง โดยได้มีการต่อเติมในปี พ.ศ. 2540 และ 2554 เป็นอาคารสูง 5 ชั้น เพื่อใช้เป็นห้องปฏิบัติการ ห้องเรียน และลานกิจกรรมนิสิต",
    },
    "Com building": {
      name: "ตึกวิศวกรรมคอมพิวเตอร์",
      // image: civilImage,
      image: comImage,
      // desc: result?.prediction?.com,
      desc: "ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน ถูกก่อตั้งอย่างเป็นทางการเมื่อวันที่ 3 กุมภาพันธ์ พ.ศ. 2532 โดยมีพันธกิจที่จะต้องดำเนินการสอน การวิจัย การสะสมองค์ความรู้ และการบริการวิชาการ ตามความชำนาญของภาควิชาฯ ผนวกกับการทำนุบำรุงศิลปวัฒนธรรมและรักษาเอกลักษณ์ของประเทศ ทั้งนี้ให้เป็นไปตามความต้องการของประเทศ ซึ่งภาควิชาฯ ได้ดำเนินการเพื่อสนองพันธกิจข้างต้น ด้วยการพัฒนาภาควิชาฯ ให้มีศักยภาพและความชำนาญในสาขาต่าง ๆ คือ สาขาวิศวกรรมคอมพิวเตอร์ สาขาเทคโนโลยีสารสนเทศ สาขาวิศวกรรมซอฟต์แวร์ และสาขาวิศวกรรมความรู้",
      moreInfo: "",
    },
    "OSC building": {
      name: "ตึกสำนักบริการคอมพิวเตอร์",
      image: comofficeImage,
      // desc: result?.prediction?.comoffice,
      desc: "เป็นหน่วยงานสนับสนุนด้านไอทีทางการศึกษาแก่นิสิต อาจารย์ บุคลากร และหน่วยงานของมหาวิทยาลัยเกษตรศาสตร์ โดยให้บริการระบบสารสนเทศ ระบบเครือข่าย รวมถึงการบริการวิชาการ และสนับสนุนการเรียนการสอนต่าง ๆ อาทิ หลักสูตรฝึกอบรมด้านไอที บริการห้องปฏิบัติการคอมพิวเตอร์ ห้องสนทนากลุ่มย่อย ห้องอบรมขนาดใหญ่ ห้องการเรียนการสอนทางไกล การถ่ายทอดสดผ่านเครือข่าย และบริการเสริมอื่น อาทิ KU-Google for Education และบริการใหม่ KU-Microsoft Office 365 for Education on Cloud",
    },
    "IE building": {
      name: "ตึกวิศวกรรมอุตสาหการ",
      image: ieImage,
      // desc: result?.prediction?.ie,
      desc: "อาคารวิศวกรรมอุตสาหกรรมอุตสาหการ-วิศวกรรมเครื่องกล ประกอบด้วยอาคารวิศวกรรมอุตสาหการ 10 ชั้นและอาคารวิศวกรรมเครื่องกล 19 ชั้น เป็นอาคารการเรียนการสอนและปฏิบัติทางด้านสาขาวิศวกรรมอุตสาหการและสาขาวิศวกรรมเครื่องกล รองรับการขยายตัวของภาควิชาฯ ซึ่งเปิดสอนหลักสูตรภาษาไทย หลักสูตรนานาชาติ ในระดับปริญญาตรีและระดับบัณฑิตศึกษา รวมถึงเพื่อให้หน่วยงานและโครงการพิเศษต่างๆ ของทั้ง 2 ภาควิชา สามารถให้บริการด้านการเรียนการสอน การวิจัย การบริการทางวิชาการ ตลอดจนการบริการด้านอื่นๆ ได้อย่างมีประสิทธิภาพยิ่งขึ้น การก่อสร้างอาคารหลังดังกล่าวได้ดำเนินการมาแล้วตั้งแต่เดือนพฤศจิกายน 2558",
    },
    "Mecha building": {
      name: "ตึกวิศวกรรมเครื่องกล",
      image: mechanicImage,
      desc: "ภาควิชาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ ตั้งอยู่ที่ อาคาร 5 อาคาร 6 และอาคาร 14 ของคณะวิศวกรรมศาสตร์ จัดตั้งขึ้นเมื่อปีพ.ศ.2510 โดยได้เปิดสอน หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมเครื่องกล หรือ วศ.บ. (วิศวกรรมเครื่องกล) ในระดับปริญญาตรีตั้งแต่ปี พ.ศ.2508 ปัจจุบันการเรียนการสอนในหลักสูตรระดับปริญญาตรีครอบคลุมวิชาพื้นฐานด้านวิศวกรรมของสาขาต่างๆและวิชาชีพในสาขาวิศวกรรมเครื่องกล โดยเน้น 5 กลุ่มวิชาหลัก ได้แก่ กลุ่มวิชาวิศวกรรมยานยนต์ กลุ่มวิชาวิศวกรรมพลังงาน กลุ่มวิชาวิศวกรรมปรับอากาศ กลุ่มวิชาวิศวกรรมออกแบบและการผลิต และกลุ่มวิชาวิศวกรรมป้องกันอัคคีภัย โดยทางภาควิชาฯ ได้จัดการเรียนการสอนออกเป็นภาคปกติ ภาคพิเศษ และ ภาคนานาชาติ",
      moreInfo: "",
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
        <DialogContent dividers={scroll === "paper"}>
          <Box
            mt={3}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <ResultCard
              name={resultImage[result?.mostProbability]?.name || ""}
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
            <Typography
              // variant="h5"
              color="blue-gray"
              className="mb-2 font-kanit"
            >
              {resultImage[result?.mostProbability]?.desc}
            </Typography>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ bgcolor: "black" }}
            onClick={handleClose}
          >
            Close
          </Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
