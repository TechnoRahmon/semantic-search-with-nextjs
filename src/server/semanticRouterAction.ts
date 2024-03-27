'use server'
import {spawn } from 'child_process'
import { pythonDirPath } from '@/utils/pythonUtils';


export const getChannelName = (query:string) =>{
    return new Promise<string>((resolve, reject )=>{
        try {
            const pyProg = spawn(`${pythonDirPath}/.venv/Scripts/python.exe `,[`${pythonDirPath}/run.py`,process.env.OPENAI_API_KEY??"", query]);
            pyProg.stdout.on('data', function(data:any) {
                resolve(data.toString().split(':')[1]?.trim() ?? "");
            });
            pyProg.stdout.on('error', function(err:any) {
                reject(err.toString() ?? "");
            });
        } catch (error) {
            reject(error?.toString() ?? "");
        }
    })
}