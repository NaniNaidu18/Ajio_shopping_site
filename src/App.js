import "./App.css";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
const shirts = [
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20221102/6u4z/63628958aeb269659c6ba52e/-473Wx593H-469211095-grey-MODEL.jpg",
    Brand: "Buda jeans co",
    Model: "Floral Print slim fit shirt",
    Price: "Rs 1499 ",
    DiscountPrice: "Rs 750 (50%off)",
    OfferPrice: "Offer Price Rs675",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20220312/Iuhy/622b9bf1f997dd03e20e5ace/-473Wx593H-469157903-lilac-MODEL.jpg",
    Brand: "The Indian Garage Go",
    Model: "Spread Collar Shirt with Patch Pocket",
    Price: "Rs 1750 ",
    DiscountPrice: "Rs 590 (60%off)",
    OfferPrice: "Offer Price Rs594",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20220312/xtsP/622bb4a4aeb26921afd48a48/-473Wx593H-469157903-teal-MODEL.jpg",
    Brand: "THE INDIAN GARAGE CO",
    Model: "Spread Collar Shirt with Patch Pocket",
    Price: "Rs 1749 ",
    DiscountPrice: "Rs 595(66%off)",
    OfferPrice: "Offer Price Rs575",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20220629/sFkx/62bc0339aeb26921af4f49b4/-473Wx593H-469234311-green-MODEL.jpg",
    Brand: "BRITISH CLUB",
    Model: "Checked Slim Fit Shirt with Patch Pocket",
    Price: "Rs 2095 ",
    DiscountPrice: "Rs 817 (61%off)",
    OfferPrice: "Offer Price Rs816",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20210909/IX28/6139fe97aeb269a2688fbb18/-473Wx593H-460815166-white-MODEL.jpg",
    Brand: "THE INDIAN GARAGE CO",
    Model: "Printed Slim Fit Shirt",
    Price: "Rs 1749 ",
    DiscountPrice: "Rs 542 (69%off)",
    OfferPrice: "Offer Price Rs545",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20220513/wCOY/627e24e0f997dd03e2b9cfac/-473Wx593H-463378823-blue-MODEL.jpg",
    Brand: "THE BEAR HOUSE",
    Model: "Tropical Print Slim Fit Shirt",
    Price: "Rs 2075 ",
    DiscountPrice: "Rs 998 (50%off)",
    OfferPrice: "Offer Price Rs985",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20220312/JQy1/622bc0cef997dd03e20f0929/-473Wx593H-469157903-black-MODEL.jpg",
    Brand: "Buda jeans co",
    Model: "Floral Print slim fit shirt",
    Price: "Rs 1499 ",
    DiscountPrice: "Rs 750 (50%off)",
    OfferPrice: "Offer Price Rs675",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230620/f0G5/649219dd42f9e729d758a303/-473Wx593H-463292672-purple-MODEL.jpg",
    Brand: " jeans peter co",
    Model: " slim fit shirt",
    Price: "Rs 1999 ",
    DiscountPrice: "Rs 1150 (20%off)",
    OfferPrice: "Offer Price Rs1075",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230718/FNCI/64b6c2d8a9b42d15c95e43fe/-473Wx593H-443016863-blue-MODEL.jpg",
    Brand: "NETPLAY",
    Model: "Striped Slim Fit Shirt",
    Price: "Rs 1199 ",
    DiscountPrice: "Rs 1000 (10%off)",
    OfferPrice: "Offer Price Rs995",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230220/7ty5/63f3898faeb26924e37bf9f4/-473Wx593H-410368573-1510-MODEL.jpg",
    Brand: "RMANI EXCHANGE",
    Model: "Slim Fit Satin Shirt with Embroidered Logo",
    Price: "Rs 10499 ",
    DiscountPrice: "Rs 5000 (50%off)",
    OfferPrice: "Offer Price Rs5075",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230726/WlnS/64c13588eebac147fc8a7a32/-473Wx593H-469520808-pink-MODEL.jpg",
    Brand: "THE INDIAN GARAGE CO",
    Model: "Floral Print slim fit shirt",
    Price: "Rs 1499 ",
    DiscountPrice: "Rs 550 (70%off)",
    OfferPrice: "Offer Price Rs500",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230629/Kd3b/649cb52aa9b42d15c9179a0e/-473Wx593H-465969969-black-MODEL.jpg",
    Brand: "Buda jeans co",
    Model: "Floral Print slim fit shirt",
    Price: "Rs 1999 ",
    DiscountPrice: "Rs 500 (75%off)",
    OfferPrice: "Offer Price Rs475",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20220208/4xgv/62016aa4aeb26921af8d4e61/-473Wx593H-441136996-navy-MODEL.jpg",
    Brand: "NETPLAY",
    Model: "NP 35 FS Dobby BSC Slim Fit Shirt",
    Price: "Rs 1499 ",
    DiscountPrice: "Rs 350 (80%off)",
    OfferPrice: "Offer Price Rs345",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230602/9VBV/6479909142f9e729d7183559/-473Wx593H-462587074-olive-MODEL.jpg",
    Brand: "DENNISLINGO PREMIUM ATTIRE",
    Model: "Checked Slim Fit Shacket",
    Price: "Rs 2499 ",
    DiscountPrice: "Rs 750 (70%off)",
    OfferPrice: "Offer Price Rs600",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230621/qsxB/64922af2d55b7d0c63836f98/-473Wx593H-463480926-pink-MODEL.jpg",
    Brand: "THE BEAR HOUSE",
    Model: "Checked Slim Fit Shirtt",
    Price: "Rs 2499 ",
    DiscountPrice: "Rs 1250 (50%off)",
    OfferPrice: "Offer Price Rs1200",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20220611/QYev/62a3aad0aeb26921af1c2ecf/-473Wx593H-441243364-mustard-MODEL3.jpg",
    Brand: "LEE COOPER",
    Model: "Shirt with Flap Pocket",
    Price: "Rs 1450 ",
    DiscountPrice: "Rs 686 (51%off)",
    OfferPrice: "Offer Price Rs476",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20210909/f2bb/6139fe9daeb269a2688fbbd3/-473Wx593H-460552789-black-MODEL.jpg",
    Brand: "THE INDIAN GARAGE CO",
    Model: "Printed Slim Fit Shirt",
    Price: "Rs 2099 ",
    DiscountPrice: "Rs 567 (73%off)",
    OfferPrice: "Offer Price Rs576",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230524/8ikE/646e5496d55b7d0c63d70b98/-473Wx593H-460436284-lightblue-MODEL.jpg",
    Brand: "THE INDIAN GARAGE CO",
    Model: "Printed Slim Fit Shirt with Patch Pocket",
    Price: "Rs 1800 ",
    DiscountPrice: "Rs 612 (65%off)",
    OfferPrice: "Offer Price Rs615",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230629/NJgR/649d74cbeebac147fc4078d0/-473Wx593H-469519972-green-MODEL.jpg",
    Brand: "KETCH",
    Model: "Printed Slim Fit Shirt ",
    Price: "Rs 2800 ",
    DiscountPrice: "Rs 602 (65%off)",
    OfferPrice: "Offer Price Rs595",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230602/olwz/6479165842f9e729d708f512/-473Wx593H-461118551-black-MODEL.jpg",
    Brand: "DENNISLINGO PREMIUM ATTIRE",
    Model: "Printed Slim Fit Shirt with Patch Pocket ",
    Price: "Rs 1849 ",
    DiscountPrice: "Rs 602 (65%off)",
    OfferPrice: "Offer Price Rs555",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20221001/gvIS/6337488df997ddfdbd001f14/-473Wx593H-469264647-navy-MODEL.jpg",
    Brand: "THE INDIAN GARAGE CO",
    Model: "Cotton Slim Fit Shirt with Patch Pocket ",
    Price: "Rs 1499 ",
    DiscountPrice: "Rs 472 (73%off)",
    OfferPrice: "Offer Price Rs473",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230620/Yf1T/649217ea42f9e729d75853cd/-473Wx593H-463236990-green-MODEL.jpg",
    Brand: "LOUIS MONARCH",
    Model: "Solid Regular Fit Shirt ",
    Price: "Rs 1699 ",
    DiscountPrice: "Rs 927 (43%off)",
    OfferPrice: "Offer Price Rs873",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230404/voUI/642c13b8711cf97ba708abde/-473Wx593H-441539351-white-MODEL.jpg",
    Brand: "LGAP",
    Model: "Slim Fit Shirt with Button-Down Collar ",
    Price: "Rs 2799 ",
    DiscountPrice: "Rs 1227 (49%off)",
    OfferPrice: "Offer Price Rs1273",
  },
  {
    ImagePath:
      "https://assets.ajio.com/medias/sys_master/root/20230524/NrbW/646e252242f9e729d7aaa2c2/-473Wx593H-460698907-beige-MODEL7.jpg",
    Brand: "THE INDIAN GARAGE CO",
    Model: "Checked Slim Fit Shirt with Patch Pocket ",
    Price: "Rs 1799 ",
    DiscountPrice: "Rs 630 (64%off)",
    OfferPrice: "Offer Price Rs629",
  },
];

function App() {
  return (
    <div>
      <Container>
        <Row>
          {shirts.map((ajio) => {
            return (
              <Col className="col-4">
                <Card className="my-4 mx-2">
                  <img
                    height={400}
                    width={400}
                    alt="Ajio Shirts For Men"
                    src={ajio.ImagePath}
                  />
                  <CardBody className="text-en center-text">
                    <CardTitle tag="h4">{ajio.Brand}</CardTitle>
                    <CardSubtitle>{ajio.Model}</CardSubtitle>
                    <CardText style={{ textDecorationLine: "line-through" }}>
                      {ajio.Price}
                    </CardText>
                    <CardText>{ajio.DiscountPrice}</CardText>
                    <CardText style={{ color: "green" }}>
                      {ajio.OfferPrice}
                    </CardText>
                    <button type="button" class="btn btn-primary">
                      Buy
                    </button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
