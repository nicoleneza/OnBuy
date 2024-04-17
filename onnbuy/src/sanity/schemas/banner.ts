import { defineField, defineType } from "sanity";

export default defineType({
    type: 'document',
    name:'banner',
    title:'banner',
    fields:[
        defineField({
            title: 'banner',
            name: 'banner',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'image',
            description:'banner image',
            validation:(rule)=>rule.required(),
            options:{
                hotspot:true
            },
            preview:{
                select:{
                    imageUrl:'assets.url',
                    title:'caption'
                }
            }
        })
    ],
    preview:{
        select:{
            title:'title',
            name:'media'
        }
    }
})