const url = "https://api.github.com/users/";
// by default running whne coming on page for first time
getUserData(url + "thepranaygupta")
async function getUserData(url){
    try{
        let response=await fetch(url)
        let data=await response.json()
        // not found
        if(data.hasOwnProperty("message")){
            
            // show no result found
            let noresultfound=document.querySelector('[data-noresult_found]');
            
            noresultfound.classList.add("show")
            
            setTimeout(()=>{
                noresultfound.classList.remove("show")
            },2000)

        }
        else{
            
            renderDataOnUi(data)
            
        }
        
    }
    catch(e){
        console.log("no response error")
        
    }
    
    
}
function renderDataOnUi(data){
    let user_icon=document.querySelector('[data-user-image]')
    let name_of_user=document.querySelector('[data-username]')
    let github_a_tag=document.querySelector('[data-githublink]')
    let date_joined=document.querySelector('[data-date_joined]')
    let user_description=document.querySelector('[data-description]')
    let repos_count=document.querySelector('[data-repos]')
    let followers_count=document.querySelector('[data-followers]')
    let following_count=document.querySelector('[data-following]')
    let location_user=document.querySelector('[data-location]')
    let blog_a_tag=document.querySelector('[data-blog]')
    let twitter_a_tag=document.querySelector('[data-twitter]')
    let company_name=document.querySelector('[data-company]')

    if(data?.avatar_url!=null){
        user_icon.src=data?.avatar_url;
    }
    else{
        user_icon.src="./devdetective-images/default_user_image.png";
    }

    if(data?.name!=null){
        name_of_user.textContent=data?.name;
    }
    else{
        name_of_user.textContent="No Name Avl.";
    }
    if(data?.login!=null){
        github_a_tag.textContent="@"+data?.login;
    }
    else{
        github_a_tag.textContent="No Link";
    }
    
    if(data?.html_url!=null){
        github_a_tag.href=data?.html_url;
    }
    else{
        github_a_tag.href="#";
    }
    

    // date fetching and converting into required format
    let dateis=data?.created_at;
    let onlydate=dateis.slice(8,10)
    let onlymonth=dateis.slice(5,7)
    let onlyyear=dateis.slice(0,4)
    let month_names_obj={
        "01":"Jan",
        "02":"Feb",
        "03":"Mar",
        "04":"Apr",
        "05":"May",
        "06":"June",
        "07":"July",
        "08":"Aug",
        "09":"Sept",
        "10":"Oct",
        "11":"Nov",
        "12":"Dec"
    }
    let monthname=month_names_obj[onlymonth]
    date_joined.textContent="Joined "+onlydate+" "+monthname+" "+onlyyear;

    if(data?.bio!=null){
        user_description.textContent=data?.bio;
    }
    else{
        user_description.textContent='This profile has no bio';
    }
    
    repos_count.textContent=data?.public_repos;
    followers_count.textContent=data?.followers;
    following_count.textContent=data?.following;
    
    if(data?.location!=null){
        location_user.textContent=data?.location;
    }
    else{
        location_user.textContent="Not Available"
    }
    
    if(data?.blog!=""){
        blog_a_tag.textContent=data?.blog;
        blog_a_tag.href="https://codehelp-devdetective.netlify.app/"+data?.blog;
    }
    else{
        blog_a_tag.textContent="Not Available"
        blog_a_tag.href="#";
    }
    
    if(data?.twitter_username!=null){
        twitter_a_tag.textContent=data?.twitter_username;
        twitter_a_tag.href="https://twitter.com/"+data?.twitter_username; 
    }
    else{
        twitter_a_tag.textContent="Not Available"
        twitter_a_tag.href="#";
    }
    
    if(data?.company!=null){
        company_name.textContent=data?.company
    }
    else{
        company_name.textContent="Not Available"
    }
    
}
let input_field=document.querySelector('[data-input_field]')
let searchbtn=document.querySelector('[data-search_btn]')

searchbtn.addEventListener('click',()=>{
    let name_entered=input_field.value;
    name_entered=name_entered.trim()
    input_field.value=""
    if(name_entered===""){
        return
    }
    else{
        getUserData(url+name_entered)
    }
})

// toggle night and dark mode
let light_sun_tab=document.querySelector('button[data-sun_icon]')
let dark_moon_tab=document.querySelector('button[data-moon_icon]')

function makeItLight(){
    let wrapper=document.getElementsByClassName("wrapper")[0];
    wrapper.classList.add("active")

    let heading=document.querySelector('[data-heading_and_toggle_button]')
    heading.classList.add("active")

    let search_input_cont=document.querySelector('[data-search_input_cont]')
    search_input_cont.classList.add("active")

    let inputfield=document.querySelector('[data-input_field]')
    inputfield.classList.add("active")
    

    let data_display_cont=document.querySelector('[data-display_user_info_cont]')
    data_display_cont.classList.add("active")

    let usernameshow=document.querySelector('[data-username]')
    usernameshow.classList.add("active")

    let dateshow=document.querySelector('[data-date_joined]')
    dateshow.classList.add("active")

    let repodata=document.querySelector('[data-div_1]')
    repodata.classList.add("active")

    let followerdata=document.querySelector('[data-div_2]')
    followerdata.classList.add("active")

    let followingdata=document.querySelector('[data-div_3]')
    followingdata.classList.add("active")

    let repo_follow_follower_cont=document.querySelector('[data-repo_follow_cont]')
    repo_follow_follower_cont.classList.add("active")

    let lastdiv_cont=document.querySelector('[data-last_div_cont]')
    lastdiv_cont.classList.add("active")

    let description=document.querySelector('[data-description]')
    description.classList.add("active")
}
function makeItDark(){
    let wrapper=document.getElementsByClassName("wrapper")[0];
    wrapper.classList.remove("active")

    let heading=document.querySelector('[data-heading_and_toggle_button]')
    heading.classList.remove("active")

    let search_input_cont=document.querySelector('[data-search_input_cont]')
    search_input_cont.classList.remove("active")

    let inputfield=document.querySelector('[data-input_field]')
    input_field.classList.remove("active")

    let data_display_cont=document.querySelector('[data-display_user_info_cont]')
    data_display_cont.classList.remove("active")

    let usernameshow=document.querySelector('[data-username]')
    usernameshow.classList.remove("active")

    let dateshow=document.querySelector('[data-date_joined]')
    dateshow.classList.remove("active")

    let repodata=document.querySelector('[data-div_1]')
    repodata.classList.remove("active")

    let followerdata=document.querySelector('[data-div_2]')
    followerdata.classList.remove("active")

    let followingdata=document.querySelector('[data-div_3]')
    followingdata.classList.remove("active")

    let repo_follow_follower_cont=document.querySelector('[data-repo_follow_cont]')
    repo_follow_follower_cont.classList.remove("active")

    let lastdiv_cont=document.querySelector('[data-last_div_cont]')
    lastdiv_cont.classList.remove("active")

    let description=document.querySelector('[data-description]')
    description.classList.remove("active")
}
light_sun_tab.addEventListener('click',()=>{
    light_sun_tab.classList.remove("active")
    dark_moon_tab.classList.add("active")
    
    makeItLight()
})
dark_moon_tab.addEventListener('click',()=>{
    light_sun_tab.classList.add("active")
    dark_moon_tab.classList.remove("active")
    makeItDark()
})


