const searchInput = document.getElementById('search-input')

searchInput.addEventListener('keydown', function (evt) {
  if (evt.code === 'Enter') {
    search()
  }
})

function search() {
  const input = searchInput.value

  window.location.href = `https://www.google.com/search?q=${input}&sxsrf=APq-WBsGGf2FHoapeAorwasuOXCz2MoMAg%3A1646563078975&source=hp&ei=Bo8kYqXIOcXLmAXy66aADg&iflsig=AHkkrS4AAAAAYiSdFkQHyizfKTMXYCBO688ck7IyQaHg&ved=0ahUKEwil4667pbH2AhXFJaYKHfK1CeAQ4dUDCAk&uact=5&oq=${input}&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDENQCMggIABCABBCxAzIFCAAQgAQyCAguEIAEENQCMgUIABCABDIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6BQguEIAEOggILhCABBCxAzoLCC4QgAQQsQMQgwFQAFjeA2CJBWgAcAB4AIABhAGIAfsEkgEDMC41mAEAoAEB&sclient=gws-wiz`
}
