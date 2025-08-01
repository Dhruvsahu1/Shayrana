import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
function RTE({name,control,label,defaultValue = ""}) {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller
        name={name||"content"}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
            initialValue={defaultValue}
            init={
                {
                    initialValue:defaultValue,
                    height:500,
                    menubar:true,
                    plugins:[
                        "image",
                        "anchor",
                        "wordcount",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                    ],
                    toolbar:
                    'undo redo | blocks | image |  formatselect | bold italic forecolor | alighnleft aligncenter bold italic forecolor | alighnleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help ',
                    content_style: "body {font-family:Helvetica,Arial,sans-serif: font-size:14px}"
                }
            }
            onEditorChange={onChange}
            />
        )}
        />
    </div>

    

  )
}

export default RTE
