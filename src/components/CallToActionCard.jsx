import React from "react";

const CallToActionCard = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center text-primary w-1/2 h-80 px-10" {...props}>
        <div className="text-lg font-bold leading-10">{props.header}</div>
        <div className="text-sm mt-4">{props.paragraph}</div>
        {props.action && (
          <div>
            <button
                  type="button"
                  className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm mt-4 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  {props.action}
                </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CallToActionCard;
