import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function BottomNavbar() {
  const location = useLocation();

  return (
    <>
      {/* bottone centrale devmeet */}
      <div className="navbar-central-button-container">
        <button className="navbar-button">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_837_98)">
              <circle cx="57" cy="60" r="37" fill="#364764" />
            </g>
            <circle cx="57.0033" cy="60.0001" r="31.7143" fill="#FCF347" />
            <path
              d="M56.2615 45.4644L38.5 51.3257V60.2952L56.2615 65.9789V59.94L42.9404 56.4765L56.2615 53.3682V45.4644Z"
              fill="#364764"
            />
            <path
              d="M58.5703 53.457V59.496L71.8915 62.9595L58.5703 66.0677V74.0604L76.3319 68.1991V59.1407L58.5703 53.457Z"
              fill="#364764"
            />
            <defs>
              <filter
                id="filter0_d_837_98"
                x="0"
                y="0"
                width="114"
                height="114"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-3" />
                <feGaussianBlur stdDeviation="10" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.176008 0 0 0 0 0.176008 0 0 0 0 0.176008 0 0 0 0.141444 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_837_98"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_837_98"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      <nav>
        {/* ----------------HOME---------------- */}
        <button className="navbar-svg-button">
          <div className="navbar-svg-container">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_525_77)">
                <path
                  d="M21.9275 14.2145C22.2101 14.191 22.4691 14.191 22.7187 14.1439C24.367 13.8333 25.0641 11.8329 23.9761 10.5573C23.9196 10.4915 23.8631 10.4303 23.8019 10.3691C20.5758 7.14021 17.3451 3.90663 14.1143 0.687176C13.9259 0.498904 13.6951 0.334166 13.455 0.207082C12.7956 -0.141222 11.5853 -0.0659128 10.9871 0.564799C10.6433 0.927223 10.2807 1.27082 9.92277 1.62383C7.02638 4.51852 4.12528 7.4132 1.2336 10.3173C1.01696 10.5338 0.800322 10.788 0.687292 11.0704C0.0797577 12.5907 1.01225 14.1204 2.63235 14.191C2.76422 14.1957 2.89608 14.191 3.0515 14.191C3.0515 14.3087 3.0515 14.4028 3.0515 14.4922C3.0515 16.7844 3.04679 19.072 3.0515 21.3642C3.05621 22.6209 3.85213 23.6376 5.05307 23.92C5.27913 23.9717 5.51932 23.9906 5.75009 23.9906C6.9369 23.9953 8.12842 23.9953 9.31524 23.9953C9.91335 23.9953 10.1771 23.7317 10.1771 23.1433C10.1771 21.3548 10.1771 19.5615 10.1771 17.7729C10.1771 16.9257 10.6528 16.4597 11.5005 16.455C12.1739 16.455 12.8427 16.4503 13.5162 16.455C14.3027 16.4597 14.7878 16.9398 14.7878 17.7258C14.7878 19.5238 14.7878 21.3218 14.7878 23.1198C14.7878 23.7317 15.0468 23.9906 15.6543 23.9906C16.827 23.9906 17.9997 23.967 19.1724 23.9953C20.7407 24.0376 21.951 22.7997 21.9275 21.2371C21.8851 18.9966 21.9181 16.7515 21.9181 14.5064C21.9275 14.4169 21.9275 14.3228 21.9275 14.2145ZM8.77835 22.5832C7.76108 22.5832 6.78619 22.5832 5.8066 22.5832C4.92591 22.5832 4.46437 22.122 4.46437 21.2418C4.46437 18.6954 4.46437 16.1443 4.46437 13.5979C4.46437 13.0708 4.1818 12.7884 3.65433 12.7884C3.33407 12.7884 3.01382 12.7931 2.69357 12.7884C2.29797 12.7837 1.98714 12.5248 1.90707 12.1435C1.83172 11.767 2.02952 11.5081 2.27913 11.2587C5.44868 8.09569 8.61822 4.92801 11.7878 1.76033C12.2964 1.25199 12.6967 1.25199 13.2101 1.76503C16.0358 4.58912 18.8615 7.4132 21.6873 10.2373C22.0735 10.6232 22.4644 11.0092 22.8458 11.3999C23.1002 11.6587 23.1802 11.9694 23.0295 12.3036C22.8882 12.6283 22.6245 12.7884 22.2666 12.7884C21.9793 12.7884 21.6873 12.7884 21.4 12.7884C20.7783 12.7884 20.524 13.0472 20.524 13.6733C20.524 16.2196 20.524 18.7707 20.524 21.3171C20.524 22.0984 20.0342 22.5832 19.2477 22.5832C18.3152 22.5832 17.3874 22.5832 16.455 22.5832C16.3796 22.5832 16.3042 22.5738 16.2101 22.5691C16.2101 22.4562 16.2101 22.3667 16.2101 22.2726C16.2101 20.6864 16.2242 19.1002 16.2006 17.514C16.1818 16.2667 15.1787 15.1653 13.9353 15.0853C12.9793 15.0194 12.0138 15.0712 11.0531 15.0759C10.9777 15.0759 10.8977 15.0947 10.8223 15.1135C9.60252 15.3912 8.79247 16.3938 8.78305 17.6646C8.77364 19.2037 8.77835 20.7429 8.77835 22.2867C8.77835 22.3714 8.77835 22.4656 8.77835 22.5832Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_525_77">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="matrix(-1 0 0 1 24.5 0)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="focusText">home</div>
          </div>
        </button>

        {/* ----------------FILTRA---------------- */}
        {location.pathname === "/FilterBy" && (
          <button
            className="navbar-svg-button"
            style={{ marginRight: "auto", backgroundColor: "rgb(252,243,71)" }}
          >
            <div className="navbar-svg-container">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="5.5"
                  cy="13.7522"
                  r="2.25"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                />
                <circle
                  cx="12.5"
                  cy="5.36621"
                  r="2.25"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                />
                <circle
                  cx="19.5"
                  cy="15.3193"
                  r="2.25"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                />
                <path
                  d="M5.5 3.5V11.2284"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M5.5 16.1686V20.0431"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M12.5 7.8606V20.0431"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M19.5 3.5L19.5 12.8612"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M19.5 17.7422V20.043"
                  stroke="rgb(54, 71, 100)"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div style={{ color: "rgb(54, 71, 100)" }}>filtra</div>
          </button>
        )}

        {location.pathname !== "/FilterBy" && (
          <Link to="/FilterBy" style={{ marginRight: "auto", width: "50%" }}>
            <button
              className="navbar-svg-button"
              style={{ marginRight: "auto", paddingLeft: "24px" }}
            >
              <div className="navbar-svg-container">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="5.5"
                    cy="13.7522"
                    r="2.25"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="12.5"
                    cy="5.36621"
                    r="2.25"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="19.5"
                    cy="15.3193"
                    r="2.25"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M5.5 3.5V11.2284"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5.5 16.1686V20.0431"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.5 7.8606V20.0431"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.5 3.5L19.5 12.8612"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.5 17.7422V20.043"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="focusText">filtra</div>
            </button>{" "}
          </Link>
        )}

        {/* ----------------NOTIFICHE---------------- */}
        <button className="navbar-svg-button">
          <div className="navbar-svg-container">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4957 17.1166C21.3747 15.3789 20.527 14.0981 18.9315 13.3019C18.7463 13.205 18.6822 13.1081 18.6893 12.9073C18.6964 11.9034 18.6964 10.9065 18.6964 9.90261C18.6964 9.18259 18.7107 8.46949 18.6893 7.74947C18.668 7.15407 18.668 6.55174 18.5469 5.97019C17.6138 1.45622 12.8414 -1.09154 8.33978 0.452351C5.26981 1.51161 3.33239 4.25322 3.31102 7.45869C3.3039 9.27951 3.3039 11.1073 3.31102 12.9281C3.31102 13.1219 3.24692 13.2119 3.07597 13.3019C1.48044 14.0981 0.625696 15.3789 0.504607 17.1097C0.454747 17.7813 0.810891 18.1205 1.50893 18.1205C3.33951 18.1205 5.17009 18.1274 7.00067 18.1136C7.22148 18.1136 7.29984 18.1828 7.36394 18.3767C7.86254 19.9483 9.32273 20.9937 11.0037 20.9937C12.6919 20.9937 14.152 19.9413 14.6506 18.3559C14.7148 18.1551 14.8002 18.1136 14.9997 18.1136C16.8374 18.1205 18.6822 18.1205 20.5199 18.1205C21.1895 18.1205 21.5456 17.7744 21.4957 17.1166ZM10.8684 19.3321C10.0778 19.2836 9.32986 18.7782 9.11617 18.1413H12.9127C12.5352 18.9305 11.7445 19.3806 10.8684 19.3321ZM19.6295 16.452H2.34943C2.47052 16.0228 2.69845 15.6697 3.00474 15.3581C3.34664 15.005 3.76689 14.7627 4.237 14.6173C4.84244 14.4304 5.01339 14.202 5.01339 13.5789C5.01339 11.5296 5.00627 9.48029 5.01339 7.43792C5.02764 4.98709 6.5092 2.86857 8.81701 2.0447C12.4069 0.763897 16.2106 2.80626 16.8872 6.37866C16.9585 6.76637 16.9798 7.16792 16.9798 7.56254C16.987 9.55644 16.987 11.5573 16.987 13.5512C16.987 14.2089 17.1508 14.4235 17.7847 14.6243C18.6181 14.8874 19.2093 15.4135 19.5654 16.1889C19.5939 16.2443 19.6153 16.2997 19.6295 16.362C19.6367 16.3897 19.6295 16.4174 19.6295 16.452Z"
                fill="white"
              />
              <path
                d="M21.4957 17.1166C21.3747 15.3789 20.527 14.0981 18.9315 13.3019C18.7463 13.205 18.6822 13.1081 18.6893 12.9073C18.6964 11.9034 18.6964 10.9065 18.6964 9.90261C18.6964 9.18259 18.7107 8.46949 18.6893 7.74947C18.668 7.15407 18.668 6.55174 18.5469 5.97019C17.6138 1.45622 12.8414 -1.09154 8.33978 0.452351C5.26981 1.51161 3.33239 4.25322 3.31102 7.45869C3.3039 9.27951 3.3039 11.1073 3.31102 12.9281C3.31102 13.1219 3.24692 13.2119 3.07597 13.3019C1.48044 14.0981 0.625696 15.3789 0.504607 17.1097C0.454747 17.7813 0.810891 18.1205 1.50893 18.1205C3.33951 18.1205 5.17009 18.1274 7.00067 18.1136C7.22148 18.1136 7.29984 18.1828 7.36394 18.3767C7.86254 19.9483 9.32273 20.9937 11.0037 20.9937C12.6919 20.9937 14.152 19.9413 14.6506 18.3559C14.7148 18.1551 14.8002 18.1136 14.9997 18.1136C16.8374 18.1205 18.6822 18.1205 20.5199 18.1205C21.1895 18.1205 21.5456 17.7744 21.4957 17.1166ZM10.8684 19.3321C10.0778 19.2836 9.32986 18.7782 9.11617 18.1413H12.9127C12.5352 18.9305 11.7445 19.3806 10.8684 19.3321ZM19.6295 16.452H2.34943C2.47052 16.0228 2.69845 15.6697 3.00474 15.3581C3.34664 15.005 3.76689 14.7627 4.237 14.6173C4.84244 14.4304 5.01339 14.202 5.01339 13.5789C5.01339 11.5296 5.00627 9.48029 5.01339 7.43792C5.02764 4.98709 6.5092 2.86857 8.81701 2.0447C12.4069 0.763897 16.2106 2.80626 16.8872 6.37866C16.9585 6.76637 16.9798 7.16792 16.9798 7.56254C16.987 9.55644 16.987 11.5573 16.987 13.5512C16.987 14.2089 17.1508 14.4235 17.7847 14.6243C18.6181 14.8874 19.2093 15.4135 19.5654 16.1889C19.5939 16.2443 19.6153 16.2997 19.6295 16.362C19.6367 16.3897 19.6295 16.4174 19.6295 16.452Z"
                fill="white"
              />
            </svg>
            <div className="focusText">notifiche</div>
          </div>
        </button>

        {/* ----------------CALENDARIO---------------- */}
        <button className="navbar-svg-button">
          <div className="navbar-svg-container">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_535_361)">
                <path
                  d="M0.5 18.6221C0.5 13.7515 0.5 8.88641 0.5 4.02129C0.510955 3.98842 0.527387 3.96102 0.532864 3.92815C0.779343 2.56395 1.86933 1.64352 3.24961 1.64352C3.79734 1.64352 4.34507 1.64352 4.88732 1.64352C4.95305 1.64352 5.01878 1.64352 5.08998 1.64352C5.08998 1.29836 5.08998 0.98607 5.08998 0.668303C5.08998 0.399845 5.21596 0.197132 5.45696 0.0711209C5.88967 -0.148029 6.38811 0.158781 6.40454 0.657346C6.41002 0.980591 6.40454 1.30932 6.40454 1.63256C9.48279 1.63256 12.5282 1.63256 15.59 1.63256C15.59 1.2874 15.579 0.958676 15.59 0.624473C15.6064 0.273834 15.8912 0.00537606 16.2363 -0.000102679C16.5869 -0.00558142 16.8826 0.262877 16.9045 0.618995C16.91 0.734048 16.9045 0.849102 16.9045 0.969634C16.9045 1.19426 16.9045 1.41341 16.9045 1.64352C17.5563 1.64352 18.1808 1.63804 18.7997 1.64352C20.2895 1.65448 21.489 2.84336 21.4945 4.3281C21.5 8.99051 21.5055 13.6474 21.489 18.3098C21.4836 19.4768 20.8865 20.3096 19.8185 20.7917C19.5994 20.8903 19.3529 20.9342 19.1174 20.9999C13.7058 20.9999 8.28873 20.9999 2.87715 20.9999C2.83881 20.9889 2.80047 20.9725 2.76213 20.9615C1.65571 20.7424 0.932707 20.085 0.593114 19.0111C0.554773 18.8851 0.532864 18.7536 0.5 18.6221ZM20.1854 7.23183C14.0454 7.23183 7.93819 7.23183 1.81455 7.23183C1.81455 7.33045 1.81455 7.40715 1.81455 7.48933C1.81455 11.0341 1.81455 14.5843 1.81455 18.129C1.81455 19.1152 2.37872 19.6795 3.36463 19.6795C8.45853 19.6795 13.5469 19.6795 18.6408 19.6795C19.6268 19.6795 20.1909 19.1152 20.1909 18.129C20.1909 14.5733 20.1909 11.0231 20.1909 7.46742C20.1854 7.39619 20.1854 7.32497 20.1854 7.23183ZM1.82003 5.89502C7.95462 5.89502 14.0618 5.89502 20.1745 5.89502C20.18 5.86215 20.1854 5.84023 20.1854 5.8238C20.1854 5.33071 20.1909 4.83762 20.1854 4.35002C20.1745 3.64326 19.6761 3.03512 18.9695 2.98033C18.2903 2.93102 17.6056 2.96937 16.91 2.96937C16.91 3.16661 16.91 3.35836 16.91 3.55012C16.91 3.97746 16.6307 4.27879 16.2418 4.27331C15.8638 4.26783 15.5955 3.97198 15.5955 3.55012C15.5955 3.35289 15.5955 3.16113 15.5955 2.96937C12.5172 2.96937 9.47183 2.96937 6.41002 2.96937C6.41002 3.18304 6.41549 3.38576 6.41002 3.58847C6.40454 3.97746 6.1252 4.26236 5.76369 4.26783C5.39124 4.27331 5.10642 3.97746 5.10094 3.58299C5.09546 3.38028 5.10094 3.17757 5.10094 2.96389C4.39984 2.96389 3.71518 2.92554 3.03599 2.97485C2.38967 3.01868 1.8748 3.56108 1.83099 4.20209C1.79264 4.76092 1.82003 5.31975 1.82003 5.89502Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_535_361">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="focusText">calendario</div>
          </div>
        </button>
      </nav>
    </>
  );
}