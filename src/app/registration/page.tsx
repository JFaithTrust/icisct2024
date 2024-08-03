const RegistrationPage = () => {
  return (
      <div className="mx-auto p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">Registration</h1>
          <p className="mb-4">
              Please click on the online registration to see the registration form and rates, any questions please
              contact
              <a href="mailto:guy.omidyar@ieee.org" className="text-blue-600 hover:underline">
                  guy.omidyar@ieee.org
              </a>.
          </p>
          <p className="mb-4">
              Register today for The International Conference on Information Science and Communications Technologies
              ICISCT 2024
          </p>
          <ul className="list-disc list-inside ml-6 mb-4">
              <li>
                  Payment Method: for United State dollar USD Bank Wired Transfer only, please contact:
                  <a href="mailto:guy.omidyar@ieee.org" className="text-blue-600 hover:underline">
                      guy.omidyar@ieee.org
                  </a>
              </li>
              <li>
                  <a href="http://example.com/online-registration" className="text-blue-600 hover:underline">
                      Online Registration
                  </a>
                  (accepts Visa, MasterCard, and Diners Club)
                  <img src="/path-to-worldpay-logo.png" alt="Powered By WorldPay" className="inline-block ml-2"/>
              </li>
          </ul>
      </div>
  );
}

export default RegistrationPage;