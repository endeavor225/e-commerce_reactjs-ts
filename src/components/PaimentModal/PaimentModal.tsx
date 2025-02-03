/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 27/09/2023 19:26:27
*/
import React, { FC, useEffect, useState } from 'react';
import './PaimentModal.css';
import StripeComponent from '../PaymentMethods/Stripe/StripeComponent/StripeComponent';
import SwitchOnOff from '../SwitchOnOff/SwitchOnOff';
import PaypalComponent from '../PaymentMethods/Paypal/PaypalComponent/PaypalComponent';

interface PaimentModalProps {
  close: () => void
}

// interface PaymentMethod{
//   name: string
// }


const PaimentModal: FC<PaimentModalProps> = ({ close }) => {

  const [paymentMethod, setPaymentMethod] = useState<boolean>(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      const modal = new (window as any).bootstrap.Modal("#paimentModal", { keyboard: false })
      modal.show()
    }
    runLocalData()
  })

  const handleSetPaymentMethod = (bool: boolean) => {
    setPaymentMethod(bool)
  }

  return (
    <div className="PaimentModal">
      <div className="modal fade" id="paimentModal" aria-labelledby="paimentModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="paimentModalLabel">Payment Modal</h1>
              <button onClick={close} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
            </div>
            <div className="modal-body">
              <div className="select-payment-method">
                <div className="payment-methode-name">Stripe</div>
                <SwitchOnOff
                  status={false}
                  setStatus={handleSetPaymentMethod}
                />
                <div className="payment-methode-name">Paypal</div>
              </div>
              {
                !paymentMethod ?
                  <StripeComponent />
                  :
                  <PaypalComponent />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaimentModal;