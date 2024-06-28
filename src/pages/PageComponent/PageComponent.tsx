import React, { useEffect, useState } from 'react'
import './PageComponent.css';
import { Navigate, useParams } from 'react-router-dom';
import { getDatasBySlug } from '../../api/entity';
import { RequestResponse } from '../../models/requestResponse';
import PageBanner from '../../components/PageBanner/PageBanner';
import Loading from '../Loading/Loading';
import { Page } from '../../models/page';

export default function PageComponent() {

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState<Page | null>(null);
    const [error, setError] = useState<boolean>(false);
    let { slug } = useParams()


    useEffect(() => {
        window.scrollTo(0,0)
        const runLocalData = async () => {
          if(slug){
            const data: RequestResponse = await getDatasBySlug("page", slug)
            if(data.isSuccess){
 
              setPage(data.result)
              setLoading(false)
 
            }else{
             setError(true)
            }
          }
        }
        runLocalData()
      },[slug])

      if(!slug){
        return <Navigate to="/error" />
      }
      if(error){
        return <Navigate to="/error" />
      }

    return (
        <div className='PageComponent'>
            {
                !loading && page?
                <>
                    <PageBanner name={page!.name} />
                    <div className="container"
                    dangerouslySetInnerHTML={{__html: page?.content}}
                    />
                </>
                :
                <Loading />
            }
        </div>
    )
}
