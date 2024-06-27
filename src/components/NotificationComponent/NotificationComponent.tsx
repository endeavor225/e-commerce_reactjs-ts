import React, { useEffect } from 'react'
import './NotificationComponent.css';
import { useSelector } from 'react-redux';
import { getNotification } from '../../redux/selectors/selectors';
import { useDispatch } from 'react-redux';
import { NotificationItem } from '../../redux/actions/types';
import { REMOVE_NOTIFICATION_ITEM } from '../../redux/actions/actionTypes';

export default function NotificationComponent() {

  const notifications = useSelector(getNotification)
  const dispatch = useDispatch()  

  const handleRemoveNotification = (notification: NotificationItem) =>{
    dispatch({
      type: REMOVE_NOTIFICATION_ITEM,
      payload: {...notification}
    })
  }

  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {
      notifications.map((notification)=>{
        setTimeout(()=>{
          handleRemoveNotification(notification)
        }, notification.timeout)
      })
      
    }
    runLocalData()
  })

  return (
    <div className="NotificationComponent">
       {
        notifications?.map((notification)=>{
          return <div className={"alert alert-"+notification.status} role="alert">
          {notification.message}

          <span onClick={()=>handleRemoveNotification(notification)} className="btn btn-close"></span>
        </div>
        })
      }
    </div>
    
  )
}
