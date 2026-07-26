export async function add_footer(){
    const about_response = await fetch('../../about/about.json')
    const about_json = await about_response.json()

    const el_footer = document.querySelector("footer")
    el_footer.classList = "min-h-lvh bg-black/80 text-center text-white py-16 px-2".split()
    const el_footer_div = document.createElement("div")
    el_footer_div.classList = "grid grid-cols-1 gap-8".split()
    el_footer.appendChild(el_footer_div)

    const el_copy_notice = document.createElement("p")
    const full_year = new Date().getFullYear()
    el_copy_notice.innerText = `© ${full_year} ${about_json['author_name']}`
    el_footer_div.appendChild(el_copy_notice)

    const el_home_link = document.createElement("a")
    el_home_link.href = "/"
    el_home_link.innerText = "home"
    el_footer_div.appendChild(el_home_link)
    
    const el_about_link = document.createElement("a")
    el_about_link.href = "/about"
    el_about_link.innerText = "about"
    el_footer_div.appendChild(el_about_link)

    for (const link of about_json['footer_links']){
        const el_link = document.createElement("a")
        el_link.href = link["url"]
        el_link.innerText = link["text"]
        el_footer_div.appendChild(el_link)
    }
}