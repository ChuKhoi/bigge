/* let menu = document.querySelector("#menu-btn");

console.log(menu);

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
}); */

//JS Slide
$(".contact-slide").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});

$(".image-bank").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: false,
  arrows: false,
});

// var header = `
// <section class="header">
//   <div class="header-top">
//     <div class="header-top__contact">
//       <div class="mobile">
//         <img src="./image/mobile.svg" alt="" />
//         <p class="header-top__text">088.944.8000</p>
//       </div>
//       <div class="mail">
//         <img src="./image/mail.svg" alt="" />
//         <p class="header-top__text">contact@biggee.vn</p>
//       </div>
//     </div>

//     <div class="header-top__icon">
//       <div class="bars">
//         <img src="./image/bars.svg" alt="" />
//         <span class="bars-notice">0</span>
//       </div>
//       <div class="icon">
//         <img src="./image/icon_human.svg" alt="" />
//       </div>
//     </div>
//   </div>

//   <div class="navbar">
//     <div class="navbar_image">
//       <img srcset="./image/image22.png 2x" alt="" />
//     </div>
//     <div class="navbar_menu">
//       <ul class="menu">
//         <li class="menu-item menu-effect">
//           <a href="#">Trang chủ</a>
//         </li>
//         <li class="menu-item">
//           <a href="#">Giới thiệu</a>
//         </li>
//         <li class="menu-item">
//           <a href="#">Định giá</a>
//         </li>
//         <li class="menu-item">
//           <a href="#">Tìm kiếm</a>
//         </li>
//         <li class="menu-item">
//           <a href="#">Thành viên</a>
//         </li>
//       </ul>
//     </div>
//     <div class="navbar_button">
//       <a href="#" class="button button--background button--rounded"
//         >Liên hệ</a
//       >
//     </div>
//   </div>
// </section>

// <!-- Header_mobile -->
// <!-- <section class="header-mobile">
//   <div class="overlay"></div>
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <img srcset="./image/logo.jpg 2x" alt="" class="logo img-fluid"/>
//   </nav>

// </section> -->
// `;

// $(document).ready(() => {
//   var root = document.getElementById("app");
//   root.innerHTML =
//     header +
//     `

// <!-- Find -->
// <section class="find">
//   <div class="find-background">
//     <div class="mycacontainer">
//       <div class="find-content">
//         <div class="transaction">
//           <div class="btn-transaction active">Định giá</div>
//           <div class="btn-transaction">Giao dịch</div>
//           <!-- <p class="transaction-text">Giao dịch</p> -->
//         </div>
//         <div class="find-search">
//           <div class="find-all">
//             <div class="btn-all">
//               <span>Tất cả</span>
//               <!-- <img srcset="./image/a.png 2x" alt="" /> -->
//             </div>
//             <span class="find-text">Điền thông tin tìm kiếm</span>
//           </div>
//           <div class="find-image">
//             <img srcset="./image/b.png 2x" alt="" />
//           </div>
//         </div>
//         <div class="btn-search">
//           <span>Tìm kiếm</span>
//         </div>
//       </div>
//     </div>
//     <!-- <img class="find-icon img-fluid" srcset="./image/Frame3.jpg 2x" alt="" /> -->
//   </div>
// </section>

// <!-- Intro -->
// <section class="intro s2">
//   <div class="intro-container">
//     <div class="intro-desc">
//       <h1 class="intro-heading">
//         Dữ liệu bất động sản<br />
//         được xử lý từ nhiều nguồn
//       </h1>
//       <span class="heading-text">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </span>
//     </div>
//     <div class="intro-allitem">
//       <div class="intro-item">
//         <img srcset="./image/folder.png 2x" alt="" />
//         <span>Danh sách chính chủ</span>
//       </div>
//       <div class="intro-item">
//         <img srcset="./image/website.png 2x" alt="" />
//         <span>Danh sách bất động sản mới đăng</span>
//       </div>
//       <div class="intro-item">
//         <img srcset="./image/payment.png 2x" alt="" />
//         <span>Bảng giá đất mới nhất</span>
//       </div>
//       <div class="intro-item">
//         <img srcset="./image/blueprint.png 2x" alt="" />
//         <span>Chi tiết thông tin định giá</span>
//       </div>
//       <div class="intro-item">
//         <img srcset="./image/growth.png 2x" alt="" />
//         <span>Báo cáo thống kê thị trường</span>
//       </div>
//     </div>
//     <div class="btn">
//       <a
//         href="#"
//         class="button button--background button--rounded btn-intro"
//         >Dịch vụ thành viên</a
//       >
//     </div>
//   </div>
// </section>

// <!-- Contact -->
// <section class="contact">
//   <div class="contact-slide">
//     <!-- // SLIDE 1 -->
//     <div class="contact-content">
//       <div class="row">
//         <div class="col-lg-5">
//           <div class="content">
//             <div class="content-header">
//               <span class="content-text">Lorem ipsum dolor sit amet,</span>
//               <h3 class="content-heading">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                 do
//               </h3>
//             </div>
//             <div class="content-icon">
//               <div class="content-item">
//                 <img srcset="./image/clarity_building-line.png 2x" alt="" />
//                 <h3>1800</h3>
//                 <span>Lorem ipsum dolor sit amet, consectetur</span>
//               </div>
//               <div class="content-item">
//                 <img srcset="./image/ei_like.png 2x" alt="" />
//                 <h3>858</h3>
//                 <span>Lorem ipsum dolor sit amet, consectetur</span>
//               </div>
//               <div class="content-item">
//                 <img srcset="./image/bi_person.png 2x" alt="" />
//                 <h3>1000+</h3>
//                 <span>Lorem ipsum dolor sit amet, consectetur</span>
//               </div>
//             </div>
//             <div class="btn-contact">
//               <span>Liên hệ với chúng tôi</span>
//             </div>
//           </div>
//         </div>
//         <div class="col-lg-7">
//           <div class="content-col7 offset-1">
//             <div class="content-left">
//               <div class="left-1 bg-blue">
//                 <img srcset="./image/building-line.png 2x" alt="" />
//                 <div class="container-common">
//                   <h4 class="white-heading">Lorem ipsum dolor sit amet</h4>
//                   <span class="white-text"
//                     >Lorem ipsum dolor sit amet, consectetur adipiscing
//                     elit, sed do eiusmod tempor incididunt ut labore et
//                     dolore magna aliqua. Ut enim ad minim veniam, laboris
//                     nisi ut aliquip ex ea commodo consequat.</span
//                   >
//                 </div>
//               </div>
//               <div class="left-1 bg-white">
//                 <img srcset="./image/clarity_bui-line.png 2x" alt="" />
//                 <div class="container-common">
//                   <h4 class="black-heading">Lorem ipsum dolor sit amet</h4>
//                   <span class="black-text"
//                     >Lorem ipsum dolor sit amet, consectetur adipiscing
//                     elit, sed do eiusmod tempor incididunt ut labore et
//                     dolore magna aliqua. Ut enim ad minim veniam, laboris
//                     nisi ut aliquip ex ea commodo consequat.</span
//                   >
//                 </div>
//               </div>
//             </div>
//             <div class="content-right">
//               <div class="left-1 bg-white">
//                 <img srcset="./image/clarity_bui-line.png 2x" alt="" />
//                 <div class="container-common">
//                   <h4 class="black-heading">Lorem ipsum dolor sit amet</h4>
//                   <span class="black-text"
//                     >Lorem ipsum dolor sit amet, consectetur adipiscing
//                     elit, sed do eiusmod tempor incididunt ut labore et
//                     dolore magna aliqua. Ut enim ad minim veniam, laboris
//                     nisi ut aliquip ex ea commodo consequat.</span
//                   >
//                 </div>
//               </div>
//               <div class="left-1 bg-green">
//                 <img srcset="./image/building-line.png 2x" alt="" />
//                 <div class="container-common">
//                   <h4 class="white-heading">Lorem ipsum dolor sit amet</h4>
//                   <span class="white-text"
//                     >Lorem ipsum dolor sit amet, consectetur adipiscing
//                     elit, sed do eiusmod tempor incididunt ut labore et
//                     dolore magna aliqua. Ut enim ad minim veniam, laboris
//                     nisi ut aliquip ex ea commodo consequat.</span
//                   >
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- // SLIDE 2 -->
//     <div class="infomation">
//       <div class="infomation-contai">
//         <div class="infomation-map">
//           <img srcset="./image/map.png 2x" alt="" class="img-fluid"/>
//         </div>
//         <div class="infomation-content">
//           <h3 class="infomation-heading">
//             Kiểm soát và xác định giá đất với hệ thống thông tin địa lý GIS
//           </h3>
//           <span class="infomation-text"
//             >Geographic Information System (Hệ thống thông tin địa lý – gọi
//             tắt là GIS) là công cụ máy tính để lập bản đồ và phân tích các
//             sự vật, hiện tượng thực trên Trái đất. Biggee.vn bản đồ hóa toàn
//             bộ thông tin đơn vị hành chính, tuyến đường nhằm xác định tương
//             quan giữa các đối tượng (lân cận, thuộc về, giao cắt…). GIS là
//             yếu tố quan trọng trong việc xác định giá đất, giúp kiểm soát
//             việc tăng/giảm giá đột ngột tại một tuyến đường, khu vực. Ngoài
//             ra, GIS còn giúp bổ sung thông tin đối với những khu vực ít
//             thông tin so sánh.</span
//           >
//           <div class="btn-contact">
//             <span>Liên hệ với chúng tôi</span>
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- // SLIDE 3 -->
//     <div class="infomation">
//       <div class="infomation-contain">
//         <div class="infomation-data">
//           <h3 class="infomation-heading">
//             Quy trình xử lý dữ liệu<br />
//             Data processing
//           </h3>
//           <span class="infomation-text"
//             >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna
//             aliqua.</span
//           >
//           <div class="btn-contact">
//             <span>Liên hệ với chúng tôi</span>
//           </div>
//         </div>
//         <div class="infomation-fac">
//           <img srcset="./image/image62.png 2x" alt="" class="img-fluid"/>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <!-- automated assessment tool -->
// <section class="autotool">
//   <div class="autotool-contai">
//     <div class="row w-100">
//       <div class="col-12 col-lg-4 left-background">
//           <div class="left-menu">
//             <a href="#" >Công cụ định giá tự động</a>
//             <a href="#">Báo cáo thống kê</a>
//             <a href="#">Bản đồ giá</a>
//             <a href="#">Quản lý danh mục bất động sản</a>
//           </div>
//           <img srcset="./image/Group85.png 2x" alt="">
//       </div>
//       <div class="col-12 col-lg-8">
//         <div class="autotool-content">
//           <div class="autotool-header">
//             <h3 class="autotool-heading">Công cụ định giá tự động</h3>
//             <p class="autotool-text">Biggee cung cấp công cụ định giá tự động: có bảng giá theo từng tuyến đường, khu vực, dự án, chỉ cần thêm một số thông tin đầu vào về đặc điểm bất động sản là có thể ra kết quả giá sơ bộ</p>
//           </div>
//           <div class="autotool-image">
//             <img srcset="./image/Group3244.png 2x" class="img-fluid" alt="">
//           </div>
//         </div>
//     </div>
//   </div>
// </section>
// <!-- digital -->
// <section class="digital">
//   <div class="digitals2">
//     <div class="digital-header">
//       <h3 class="digital-heading">Giải pháp chuyển đổi số cho ngân hàng</h3>
//     </div>
//     <div class="digital-content">
//         <div class="digital-content-s1">
//           <div class="digital-content-s1-overlay"></div>
//           <img src="./image/Rectangle70.png" alt="Building" class="img-fluid" />
//           <div class="digital-content-s1-content">
//             <div class="digital-content-s1-content__des">
//               <h2 class="digital-content-s1__heading">Số hoá TSĐB</h2>
//               <ul class="digital-content-s1__text">
//                 <li>Dễ dàng quản lý và theo dõi trực quan trên bản đồ</li>
//                 <li>Hệ thống riêng đảm bảo tính bảo mật</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div class="digital-content-s2">
//           <div class="digital-content-s2-p1">
//             <div class="digital-content-s2-overlay"></div>
//             <img src="./image/Rectangle71.png" alt="Building" class="img-fluid" />
//             <div class="digital-content-s1-content">
//               <div class="digital-content-s2-content__des">
//                 <h2 class="digital-content-s1__heading">Giảm thiểu rủi ro</h2>
//                 <ul class="digital-content-s1__text">
//                   <li>Công cụ tra cứu quy hoạch giúp giảm thiểu định giá sai vị trí</li>
//                   <li>Giá sát thị trường</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div class="digital-content-s2-p2">
//             <div class="digital-content-s2-overlay"></div>
//             <img src="./image/Rectangle68.png" alt="Building" class="img-fluid" />
//             <div class="digital-content-s1-content">
//               <div class="digital-content-s2-content__des">
//                 <h2 class="digital-content-s1__heading">Tăng tốc độ giải quyết hồ sơ</h2>
//                 <ul class="digital-content-s1__text">
//                   <li>Tra cứu nhanh thông tin so sánh </li>
//                   <li>Dễ dàng kiểm chứng tính chính xác của thông tin</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="digital-content-s3">
//           <div class="digital-content-s3__content">
//             <div class="digital-content-s3-overlay"></div>
//             <img src="./image/Rectangle69.png" alt="Building" class="img-fluid" />
//             <div class="digital-content-s1-content">
//               <div class="digital-content-s2-content__des">
//                 <h2 class="digital-content-s1__heading">Trải nghiệm người dùng</h2>
//                 <ul class="digital-content-s3__text">
//                   <li>Khách hàng đăng ký vay, hệ thống ra giá sơ bộ và đề xuất mức vay</li>
//                   <li>Kênh quảng cáo sản phẩm vay hiệu quả</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//         </div>

//   </div>
// </section>
// <!-- Map -->
// <section class="map">

//   <div class="map-content">
//       <h3 class="number">30+</h3>
//       <h3 class="distric">Tỉnh thành</h3>
//       <span class="more">và tiếp tục mở rộng</span>
//   </div>

//     <!-- <img class="img-fluid" srcset="./image/Framemap1.png 2x" alt=""> -->

// </section>

// <!-- partner -->
// <section class="partner">
//   <div class="partner-content">
//     <h3 class="heading">Đối tác của Biggee</h3>
//     <div class="image-bank">
//       <img srcset="./image/tech.png 2x" alt="">
//       <img srcset="./image/vcb.png 2x" alt="">
//       <img srcset="./image/ocean.png 2x" alt="">
//       <img srcset="./image/pv.png 2x" alt="">
//       <img srcset="./image/mb.png 2x" alt="">
//       <img srcset="./image/bidv.png 2x" alt="">
//     </div>
//   </div>
// </section>
// <!-- support -->
// <section class="support">
//   <div class="mycacontainer">
//     <div class="mycacontainer-bg">
//       <div class="support-header">
//         <h3 class="support-heading">Để lại thông tin Biggee sẽ hỗ trợ bạn</h3>
//         <span class="support-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. dolor sit amet</span>
//       </div>
//       <div class="support-form">
//         <div class="row mb-3">
//           <div class="col-5">
//             <select class="form-select" id="specificSizeSelect" >
//               <option selected></option>
//             </select>
//           </div>
//           <div class="col-7">
//             <input type="text" class="form-control form-custome" placeholder="Họ và tên của bạn" aria-label="Last name">
//           </div>
//         </div>
//         <div class="row mb-3">
//           <div class="col-5">
//             <input type="text" class="form-control form-custome" placeholder="Số điện thoại" aria-label="First name">
//           </div>
//           <div class="col-7">
//             <input type="text" class="form-control form-custome" placeholder="Email" aria-label="Last name">
//           </div>
//         </div>
//         <div class="row mb-3">
//           <div class="col">
//             <input  type="text" class="form-control content-sp" placeholder="Nội dung hỗ trợ" aria-label="First name">
//           </div>
//         </div>
//         <div class="support-btn">
//           <a href="#">Gửi ngay</a>
//         </div>
//       </div>

//     </div>

//   </div>
// </section>
// <!-- footer -->
// <section class="footer">
//   <div class="footer-container">
//     <div class="box-container">
//       <div class="box-1">
//         <img class="box-1_logo" srcset="./image/footer.png 2x" alt="">
//         <p class="box-1_text"> <strong>Biggee.vn</strong> là một hệ thống thông tin bất động sản dựa trên nền tảng thu thập và phân tích thông tin từ nhiều nguồn. <strong>Biggee.vn</strong> cung cấp công cụ định giá bất động sản trực tuyến và hoàn toàn miễn phí và chính xác nhất theo giá thị trường.</p>
//         <div class="box-1__contact">
//           <img srcset="./image/Frame1259.png 2x" alt="">
//           <p>088.944.8000</p>
//         </div>
//         <div class="box-1__contact">
//           <img srcset="./image/Frame1258.png 2x" alt="">
//           <p>contact@biggee.vn</p>
//         </div>
//         <div class="box-1__contact contact-last">
//           <img srcset="./image/Frame1260.png 2x" alt="">
//           <div class="box-1__contact-text">
//             <p>HN: Tầng 15 Tòa VCCI, Số 9 Đào Duy Anh, Phương Mai, Đống Đa, Hà Nội</p>
//             <br>
//             <p>HCM: 90 Pasteur, Bến Nghé, Quận 1, TP Hồ Chí Minh</p>
//           </div>
//         </div>
//       </div>

//       <div class="box-2">
//         <h3>Popular Searches</h3>
//         <div class="box-2__menu">
//           <a href="#home" class="links">Về chúng tôi</a>
//           <a href="#about" class="links">Câu hỏi thường gặp</a>
//           <a href="#features" class="links">Hướng dẫn mua hàng</a>
//           <a href="#pricing" class="links">Chính sách quyền riêng tư</a>
//           <a href="#trainer" class="links">Báo cáo thống kê</a>
//           <a href="#trainer" class="links">Giải pháp, dịch vụ</a>
//         </div>
//       </div>

//       <div class="box-2">
//         <h3>Quick Links</h3>
//         <div class="box-2__menu">
//           <a href="#home" class="links">Định giá nhà đất</a>
//           <a href="#about" class="links">Định giá căn hộ chung cư</a>
//           <a href="#features" class="links">Bản đồ giá nhà đất</a>
//           <a href="#pricing" class="links">Bản đồ giá căn hộ</a>
//           <a href="#trainer" class="links">Tạo danh mục tài sản</a>
//         </div>
//       </div>

//       <div class="box-2">
//         <div class="box-2__content">
//           <h3>Follow chúng tôi</h3>
//           <div class="link">
//             <a href="#" class="fab fa-facebook-f"></a>
//             <a href="#" class="fab fa-linkedin"></a>
//             <a href="#" class="fab fa-youtube"></a>
//             <a href="#" class="fab fa-tiktok"></a>
//           </div>
//         </div>
//         <div class="box-2__app">
//           <h3>App comming soon</h3>
//           <div class="box-2__btn1">
//             <img srcset="./image/CHPlay.png 2x" alt="" class="img-fluid">
//             <a href="#" class="box-2--button">CHplay</a>
//           </div>
//           <div class="box-2__btn1">
//             <img srcset="./image/Apple.png 2x" alt="" class="img-fluid">
//             <a href="#" class="box-2--button">App Store</a>
//           </div>

//         </div>
//       </div>

//     </div>

//   </div>
// </section>
// `;
// });
