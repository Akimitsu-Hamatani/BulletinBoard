import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BBSCard from './BBSCard';
import { BBSData } from '../types/types';

interface BBSDataProps{
  bbsAllData: BBSData[];
}


const BBSCardList = ({bbsAllData}:BBSDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        {bbsAllData.map((BBSData: BBSData) => (
          <BBSCard key={BBSData.id} bbsData={BBSData}/>
        ))}
    </div>
  );
};

export default BBSCardList;
