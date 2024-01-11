import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ResultCard = ({ name }) => {
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(page);
  };
  return (
    <Card className="mt-6 w-96 my-6">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://www.u-review.in.th/uploads/contents/201608021346284VAtzjX.jpg"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          ตึกชูชาติที่ตั้งอยู่ในมหาวิทยาลัยเกษตรศาสตร์ (Kasetsart University)
          ที่หมู่เรียนวิทยาศาสตร์เกษตร
          หรือหมู่เรียนเกษตรศาสตร์ก่อนหน้านี้เป็นที่รู้จักกันดีในชื่อ "ตึกกำภู"
          มันเป็นหนึ่งในตึกที่สำคัญและมีความหมายทางการศึกษาของมหาวิทยาลัยนี้.
          ตำแหน่งที่ตั้ง:
          ตึกชูชาติหรือตึกกำภูตั้งอยู่ที่หมู่เรียนวิทยาศาสตร์เกษตร
          มหาวิทยาลัยเกษตรศาสตร์ บนทำเลที่สูงและสวยงามในวงเวียนสวนจิตรลดา
          ห่างจากอนุสาวรีย์พ่อขุนคณิตและมหาวิทยาลัยขอนแก่นไม่ไกล. ความสำคัญ:
          ตึกกำภูมีความสำคัญในการให้บริการการศึกษาทางด้านเกษตรแก่นักศึกษา
          โดยเฉพาะในสาขาที่เกี่ยวข้องกับการเกษตรและวิทยาศาสตร์. สถาปัตยกรรม:
          ตึกชูชาติมีสถาปัตยกรรมที่สวยงามและเป็นเอกลักษณ์
          เพื่อสร้างบรรยากาศที่เหมาะสมสำหรับการเรียนการสอนและการวิจัยทางด้านเกษตร.
          สิ่งอำนวยความสะดวก: ตึกกำภูมีสิ่งอำนวยความสะดวกที่ทันสมัย เช่น
          ห้องเรียนที่มีเทคโนโลยีที่ทันสมัย, ห้องปฏิบัติการ, ห้องสมุด,
          และสิ่งอำนวยความสะดวกอื่นๆ ที่สามารถให้บริการการศึกษาและการวิจัยได้.
          บทบาทในการศึกษา:
          ตึกชูชาติเป็นสถานที่สำคัญที่สนับสนุนให้นักศึกษามีการเรียนรู้และศึกษาในสาขาเกษตรศาสตร์ทุกด้าน
          ทำให้เป็นที่รู้จักและได้รับการเคารพจากนักศึกษาและบุคลากรทั่วไป.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          className="bg-gradient-to-r from-greenPrimary-50 to-greenPrimary-500"
          onClick={() => handleClick("/")}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
